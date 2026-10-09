import React, { useState } from 'react';
import { CATEGORIAS } from '../data/servicios';

export default function CatalogoServicios({ onAgregar }) {
  const [activa, setActiva] = useState(CATEGORIAS[0].id);
  const categoria = CATEGORIAS.find((c) => c.id === activa);

  return (
    <section className="glass rounded-2xl p-5 sm:p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
          <span className="text-sm">📋</span>
        </div>
        <div>
          <h2 className="font-bold text-white text-sm">Catálogo de Servicios</h2>
          <p className="text-[11px] text-slate-400">
            Toca un servicio para agregarlo
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-3 -mx-1 px-1">
        {CATEGORIAS.map((cat) => {
          const isActive = activa === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiva(cat.id)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200 border border-white/5'
              }`}
              style={
                isActive
                  ? {
                      background: cat.color,
                      boxShadow: `0 8px 20px -8px ${cat.color}`,
                    }
                  : {}
              }
            >
              <span>{cat.emoji}</span>
              <span>{cat.nombre}</span>
            </button>
          );
        })}
      </div>

      {/* Servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {categoria.servicios.map((serv) => (
          <button
            key={serv.id}
            onClick={() => onAgregar(serv)}
            className="group flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/40 text-left transition-all active:scale-[0.98]"
          >
            <p className="text-sm text-slate-200 leading-snug flex-1 min-w-0 truncate">
              {serv.nombre}
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm font-bold tabular-nums text-white">
                ${serv.precio}
              </span>
              <span className="w-6 h-6 rounded-lg bg-white/10 group-hover:bg-indigo-500 text-slate-400 group-hover:text-white flex items-center justify-center text-xs font-bold transition-all">
                +
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}