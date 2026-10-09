import React from 'react';

const STYLES = {
  success: 'bg-emerald-600 shadow-emerald-600/30',
  error: 'bg-rose-600 shadow-rose-600/30',
  info: 'bg-slate-800 shadow-slate-900/40 border border-white/10',
};

const ICONS = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
};

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-toast pointer-events-none px-4 w-full max-w-md">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-white font-medium shadow-2xl ${
          STYLES[toast.tipo] || STYLES.info
        }`}
      >
        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
          {ICONS[toast.tipo] || ICONS.info}
        </span>
        <span className="text-sm">{toast.msg}</span>
      </div>
    </div>
  );
}