import React from 'react';

export default function ListaItems({ items, onEliminar, onLimpiar }) {
  if (items.length === 0) return null;

  return (
    <section className="glass rounded-2xl p-5 animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Items ({items.length})
        </h3>
        <button
          onClick={onLimpiar}
          className="text-[11px] font-semibold text-rose-400 hover:text-rose-300 transition"
        >
          Vaciar todo
        </button>
      </div>

      <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
        {items.map((item) => (
          <div
            key={item.uid}
            className="group flex items-center justify-between gap-2 bg-white/[0.03] rounded-xl px-3 py-2.5 border border-white/10 hover:border-rose-500/30 transition"
          >
            <span className="text-xs text-slate-200 truncate flex-1 min-w-0">
              {item.nombre}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs font-bold text-white tabular-nums">
                ${item.precio}
              </span>
              <button
                onClick={() => onEliminar(item.uid)}
                className="w-6 h-6 rounded-lg bg-white/5 text-slate-500 hover:bg-rose-500 hover:text-white flex items-center justify-center text-sm transition-all active:scale-90"
                aria-label="Eliminar"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}