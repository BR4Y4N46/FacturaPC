// Si más adelante quieres re-activar el toggle, este hook está listo.
// Por ahora, el sistema está en modo oscuro permanente.

export function useTheme() {
  return { dark: true, toggle: () => {} };
}