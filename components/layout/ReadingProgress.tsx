// Barra de progreso de lectura para comparativas y guías: 2px fijos en
// lo alto de la pantalla que se llenan con el scroll de la página. Es
// solo CSS (.reading-progress en globals.css, con animation-timeline:
// scroll()), sin JS; donde no hay soporte no se muestra. Decorativa:
// el lector de pantalla no la anuncia.
export default function ReadingProgress() {
  return <div aria-hidden="true" className="reading-progress" />;
}
