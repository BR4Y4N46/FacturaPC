export const CATEGORIAS = [
  {
    id: 'mantenimiento',
    nombre: 'Mantenimiento',
    emoji: '🛠️',
    color: '#4f46e5',
    servicios: [
      { id: 'mant-basico', nombre: 'Mantenimiento Básico (limpieza software)', precio: 20000 },
      { id: 'mant-completo', nombre: 'Mantenimiento Completo (limpieza + pasta térmica)', precio: 50000 },
      { id: 'mant-preventivo', nombre: 'Mantenimiento Preventivo Empresarial', precio: 50000 },
    ],
  },
  {
    id: 'formateo',
    nombre: 'Formateo',
    emoji: '💿',
    color: '#6366f1',
    servicios: [
      { id: 'form-win7', nombre: 'Formateo Windows 7', precio: 60000 },
      { id: 'form-win8', nombre: 'Formateo Windows 8', precio: 70000 },
      { id: 'form-win10', nombre: 'Formateo Windows 10', precio: 50000 },
      { id: 'form-win11', nombre: 'Formateo Windows 11', precio: 50000 },
      { id: 'form-linux', nombre: 'Formateo Linux (Ubuntu/Mint)', precio: 50000 },
    ],
  },
  {
    id: 'limpieza',
    nombre: 'Limpieza',
    emoji: '🧹',
    color: '#0ea5e9',
    servicios: [
      { id: 'limp-interna', nombre: 'Limpieza Interna (polvo, ventiladores)', precio: 50000 },
      { id: 'limp-externa', nombre: 'Limpieza Externa + Pantalla', precio: 50000 },
      { id: 'limp-completa', nombre: 'Limpieza Completa + Pasta Térmica', precio: 50000 },
    ],
  },
  {
    id: 'office',
    nombre: 'Paquetes Office',
    emoji: '📊',
    color: '#10b981',
    servicios: [
      { id: 'office-365', nombre: 'Office 365 (1 año)', precio: 380000 },
      { id: 'office-2019', nombre: 'Office 2019 Pro Plus', precio: 30000 },
      { id: 'office-2021', nombre: 'Office 2021 Pro Plus', precio: 50000 },
      { id: 'office-libre', nombre: 'LibreOffice / OpenOffice', precio: 30000 },
    ],
  },
  {
    id: 'reparacion',
    nombre: 'Reparación PC',
    emoji: '🔧',
    color: '#f59e0b',
    servicios: [
      { id: 'rep-diag', nombre: 'Diagnóstico Técnico', precio: 10000 },
      { id: 'rep-hardware', nombre: 'Reparación de Hardware', precio: 50000 },
      { id: 'rep-virus', nombre: 'Eliminación de Virus/Malware', precio: 50000 },
    ],
  },
];