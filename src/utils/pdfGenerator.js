import jsPDF from 'jspdf';

export function generarPDF(factura) {
  const doc = new jsPDF({ unit: 'mm', format: [80, 200] });
  const ancho = 80;
  let y = 10;

  // Header indigo
  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, ancho, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('ASTRASOFTHARD-PC', ancho / 2, 10, { align: 'center' });
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Servicio Tecnico Especializado', ancho / 2, 15, { align: 'center' });
  doc.text('WHATSAPP: +57 3023652811', ancho / 2, 19, { align: 'center' });

  y = 30;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(`Factura N°: ${factura.numero}`, 5, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`Fecha: ${factura.fecha}`, 5, y);
  y += 6;

  doc.setDrawColor(220);
  doc.line(5, y, ancho - 5, y);
  y += 5;

  // Cliente
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('CLIENTE', 5, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`Nombre: ${factura.cliente.nombre}`, 5, y);
  y += 4;
  if (factura.cliente.telefono) {
    doc.text(`Tel: ${factura.cliente.telefono}`, 5, y);
    y += 4;
  }
  if (factura.cliente.email) {
    doc.text(`Email: ${factura.cliente.email}`, 5, y);
    y += 4;
  }
  y += 2;

  doc.setDrawColor(220);
  doc.line(5, y, ancho - 5, y);
  y += 5;

  // Servicios
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('SERVICIOS', 5, y);
  y += 5;

  doc.setFontSize(8);
  factura.items.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    const nombreCorto =
      item.nombre.length > 30 ? item.nombre.substring(0, 30) + '...' : item.nombre;
    doc.text(nombreCorto, 5, y);
    doc.text(`$${item.precio.toFixed(2)}`, ancho - 5, y, { align: 'right' });
    y += 4;
  });

  y += 2;
  doc.setDrawColor(220);
  doc.line(5, y, ancho - 5, y);
  y += 5;

  // Total
  doc.setFillColor(79, 70, 229);
  doc.rect(5, y - 3, ancho - 10, 10, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('TOTAL:', 7, y + 4);
  doc.text(`$${factura.total.toFixed(2)}`, ancho - 7, y + 4, { align: 'right' });
  y += 15;

  // Footer
  doc.setTextColor(120);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'italic');
  doc.text('Gracias por su preferencia!', ancho / 2, y, { align: 'center' });
  y += 4;
  doc.text('-----------------------------------', ancho / 2, y, {
    align: 'center',
  });

  doc.save(`Factura-${factura.numero}.pdf`);
}
