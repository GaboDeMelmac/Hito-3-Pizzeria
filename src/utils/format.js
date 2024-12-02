export function formatearNumeroConMiles(numero) {
  const formatter = new Intl.NumberFormat("es-ES"); // 'es-ES' para formato en español de España
  return formatter.format(numero);
}
