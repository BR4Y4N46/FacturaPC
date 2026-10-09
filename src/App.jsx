import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import FormularioFactura from './components/FormularioFactura';
import CatalogoServicios from './components/CatalogoServicios';
import TicketPreview from './components/TicketPreview';
import ListaItems from './components/ListaItems';
import BotonesAccion from './components/BotonesAccion';
import Toast from './components/Toast';
import { generarPDF } from './utils/pdfGenerator';
import { enviarFacturaASheets } from './utils/sheetsApi';

export default function App() {
  const [cliente, setCliente] = useState({
    nombre: '',
    telefono: '',
    email: '',
    notas: '',
  });
  const [items, setItems] = useState([]);
  const [numeroFactura, setNumeroFactura] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setNumeroFactura('FAC-' + Date.now().toString().slice(-8));
  }, []);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.precio, 0),
    [items]
  );

  const factura = useMemo(
    () => ({
      numero: numeroFactura,
      fecha: new Date().toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      cliente,
      items,
      total,
    }),
    [numeroFactura, cliente, items, total]
  );

  const mostrarToast = (msg, tipo = 'success') => {
    setToast({ msg, tipo });
    setTimeout(() => setToast(null), 2800);
  };

  const agregarServicio = (serv) => {
    setItems((prev) => [...prev, { ...serv, uid: Date.now() + Math.random() }]);
    mostrarToast(`${serv.nombre} agregado`, 'success');
  };

  const eliminarServicio = (uid) => {
    setItems((prev) => prev.filter((i) => i.uid !== uid));
  };

  const limpiarTodo = () => {
    setItems([]);
    setCliente({ nombre: '', telefono: '', email: '', notas: '' });
    setNumeroFactura('FAC-' + Date.now().toString().slice(-8));
    mostrarToast('Factura reiniciada', 'info');
  };

  const handleGenerarPDF = () => {
    if (!cliente.nombre || items.length === 0) {
      mostrarToast('Completa el nombre y agrega servicios', 'error');
      return;
    }
    generarPDF(factura);
    mostrarToast('PDF generado correctamente', 'success');
  };

  const handleEnviarSheets = async () => {
    if (!cliente.nombre || items.length === 0) {
      mostrarToast('Completa el nombre y agrega servicios', 'error');
      return;
    }

    setEnviando(true);

    const payload = {
      ...factura,
      items: items.map((i) => i.nombre).join(' | '),
    };

    const res = await enviarFacturaASheets(payload);

    setEnviando(false);
    mostrarToast(
      res.ok ? 'Enviado a Google Sheets' : 'Error al enviar',
      res.ok ? 'success' : 'error'
    );
  };

  return (
    <div className="min-h-screen relative">
      <div className="bg-blobs"></div>

      <div className="relative z-10">
        <Header numero={numeroFactura} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            <FormularioFactura cliente={cliente} setCliente={setCliente} />
            <CatalogoServicios onAgregar={agregarServicio} />
          </div>

          <aside className="lg:col-span-5 xl:col-span-4 space-y-5 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1 lg:pb-4">
            <TicketPreview factura={factura} />
            <ListaItems
              items={items}
              onEliminar={eliminarServicio}
              onLimpiar={limpiarTodo}
            />
            <BotonesAccion
              onPDF={handleGenerarPDF}
              onSheets={handleEnviarSheets}
              onNueva={limpiarTodo}
              enviando={enviando}
            />
          </aside>
        </main>

        <footer className="text-center py-6 text-[11px] text-slate-500">
          TECNO·PC · Sistema de facturación · {new Date().getFullYear()}
        </footer>
      </div>

      <Toast toast={toast} />
    </div>
  );
}