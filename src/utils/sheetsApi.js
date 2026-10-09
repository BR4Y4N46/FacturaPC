// Reemplaza con tu URL de Google Apps Script
const SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxgsli9YM0aVyD0K9njdxgLRNuj55KM7YyKh5Kwq0VPZAOb9_dgk-TI2t5G2GARVVXB/exec';

export async function enviarFacturaASheets(factura) {
  try {
    const payload = {
      numero: factura.numero,
      fecha: factura.fecha,
      cliente: factura.cliente,
      items: factura.items,
      total: factura.total,
    };

    console.log('📤 Enviando a Sheets:', payload);

    await fetch(SHEETS_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain', // ← clave: NO uses application/json
      },
      body: JSON.stringify(payload),
    });

    // Con no-cors no podemos leer la respuesta del servidor.
    // Si no lanzó excepción, asumimos que se envió.
    return { ok: true };
  } catch (error) {
    console.error('❌ Error enviando a Sheets:', error);
    return { ok: false, error: error.message };
  }
}