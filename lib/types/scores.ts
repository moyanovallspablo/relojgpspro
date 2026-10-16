export type ScoreAxis =
  | "bateria"
  | "pantalla"
  | "gps"
  | "rendimiento"
  | "salud"
  | "calidadPrecio";

// Puntuación de 1 a 10 en cada eje del gráfico de radar.
export type WatchScores = Record<ScoreAxis, number>;
