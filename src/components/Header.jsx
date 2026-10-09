import React from 'react';

export default function Header({ numero }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/25">
            <span className="text-lg">💻</span>
          </div>
          <div className="leading-tight">
            <h1 className="font-bold text-base tracking-tight text-white">
              TECNO<span className="text-indigo-400">·</span>PC
            </h1>
            <p className="text-[11px] text-slate-400">Sistema de Facturación</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300 tabular-nums">
            {numero}
          </span>
        </div>
      </div>
    </header>
  );
}