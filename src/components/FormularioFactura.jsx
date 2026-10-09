import React from 'react';

function Field({ label, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
        <span>{label}</span>
        {hint && (
          <span className="text-[10px] text-slate-500 normal-case font-normal">
            {hint}
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-indigo-500/10';

export default function FormularioFactura({ cliente, setCliente }) {
  return (
    <section className="glass rounded-2xl p-5 sm:p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
        <div>
          <h2 className="font-bold text-white text-sm">Datos del Cliente</h2>
          <p className="text-[11px] text-slate-400">
            Completa la información para la factura
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Field label="Nombre completo" hint="requerido">
          <input
            type="text"
            value={cliente.nombre}
            onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
            placeholder="Ej. Juan Pérez"
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Teléfono">
            <input
              type="tel"
              value={cliente.telefono}
              onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
              placeholder="300 000 0000"
              className={inputClass}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={cliente.email}
              onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
              placeholder="correo@mail.com"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Notas adicionales">
          <textarea
            value={cliente.notas}
            onChange={(e) => setCliente({ ...cliente, notas: e.target.value })}
            placeholder="Observaciones, modelo del equipo, serie, etc."
            rows="2"
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>
    </section>
  );
}