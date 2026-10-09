import React from 'react';

function ActionButton({
  onClick,
  disabled,
  icon,
  label,
  sublabel,
  variant = 'primary',
}) {
  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 text-white',
    success:
      'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 text-white',
    ghost:
      'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]}`}
    >
      <span className="text-lg flex-shrink-0">{icon}</span>
      <span className="flex-1 text-left min-w-0">
        <span className="block text-sm truncate">{label}</span>
        {sublabel && (
          <span className="block text-[10px] opacity-70 font-normal mt-0.5 truncate">
            {sublabel}
          </span>
        )}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="opacity-60 flex-shrink-0"
      >
        <path
          d="M9 18l6-6-6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function BotonesAccion({ onPDF, onSheets, onNueva, enviando }) {
  return (
    <div className="space-y-2.5">
      <ActionButton
        variant="primary"
        onClick={onPDF}
        icon="📄"
        label="Generar PDF"
        sublabel="Descargar ticket en formato 80mm"
      />
      <ActionButton
        variant="success"
        onClick={onSheets}
        disabled={enviando}
        icon={enviando ? '⏳' : '📊'}
        label={enviando ? 'Enviando...' : 'Enviar a Google Sheets'}
        sublabel="Registrar factura en la nube"
      />
      <ActionButton
        variant="ghost"
        onClick={onNueva}
        icon="🔄"
        label="Nueva Factura"
        sublabel="Reiniciar el formulario"
      />
    </div>
  );
}