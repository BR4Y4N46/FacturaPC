import React from 'react';

export default function TicketPreview({ factura }) {
  return (
    <div className="animate-slide-up">
      <div className="mb-3 flex items-center justify-between px-1">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Vista Previa
        </h3>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/20 text-indigo-300 font-semibold">
          Ticket 80mm
        </span>
      </div>

      <div className="ticket-paper rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-5 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative">
            <div className="w-11 h-11 mx-auto rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur flex items-center justify-center mb-2">
              <span className="text-xl">💻</span>
            </div>
            <h2 className="text-lg font-bold tracking-wide">ASTRASOFTHARD</h2>
            <p className="text-[10px] opacity-90 tracking-widest">
              SISTEMS
            </p>
            <p className="text-[10px] opacity-75 mt-1">📞 +57 3023652811</p>
          </div>
        </div>

        {/* Meta */}
        <div className="px-5 py-3 bg-slate-50 border-b border-dashed border-slate-300">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500 uppercase tracking-wider">Factura</span>
            <span className="font-bold text-slate-800 tabular-nums">
              {factura.numero}
            </span>
          </div>
          <div className="flex justify-between text-[11px] mt-1">
            <span className="text-slate-500 uppercase tracking-wider">Fecha</span>
            <span className="font-medium text-slate-700">{factura.fecha}</span>
          </div>
        </div>

        {/* Cliente */}
        <div className="px-5 py-4 border-b border-dashed border-slate-300">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Cliente
          </p>
          <p className="text-sm font-semibold text-slate-800">
            {factura.cliente.nombre || '—'}
          </p>
          {factura.cliente.telefono && (
            <p className="text-[11px] text-slate-600 mt-0.5">
              📞 {factura.cliente.telefono}
            </p>
          )}
          {factura.cliente.email && (
            <p className="text-[11px] text-slate-600">
              ✉️ {factura.cliente.email}
            </p>
          )}
          {factura.cliente.notas && (
            <p className="text-[10px] text-slate-500 italic mt-2 pt-2 border-t border-dashed border-slate-200">
              📝 {factura.cliente.notas}
            </p>
          )}
        </div>

        {/* Items */}
        <div className="px-5 py-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Servicios ({factura.items.length})
          </p>

          {factura.items.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-3xl opacity-30 mb-2">🧾</div>
              <p className="text-[11px] text-slate-400 italic">
                Agrega servicios para ver el detalle
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {factura.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start gap-3 text-[12px]"
                >
                  <span className="text-slate-700 leading-snug flex-1">
                    {item.nombre}
                  </span>
                  <span className="font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                    ${item.precio.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total */}
        <div className="px-5 py-4 bg-indigo-600 text-white">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider opacity-90">
              Total
            </span>
            <span className="font-bold text-2xl tabular-nums">
              ${factura.total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="ticket-edge"></div>
        <div className="px-5 py-3 text-center bg-white">
          <p className="text-[10px] text-slate-500 italic">
            ¡Gracias por su preferencia!
          </p>
          <p className="text-[9px] text-slate-400 mt-0.5">
            -------------------------------------
          </p>
        </div>
      </div>
    </div>
  );
}
