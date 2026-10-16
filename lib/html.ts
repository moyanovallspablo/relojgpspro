// Divide el HTML de un artículo justo antes de su segundo <h2>, para
// poder intercalar un bloque (p. ej. un anuncio) al terminar la primera
// sección sin separar un encabezado de su texto. Si no hay segundo
// <h2>, todo el HTML queda en la primera parte.
export function splitAfterFirstSection(html: string): [string, string] {
  const first = html.indexOf("<h2");
  const second = first === -1 ? -1 : html.indexOf("<h2", first + 3);
  if (second === -1) return [html, ""];
  return [html.slice(0, second), html.slice(second)];
}
