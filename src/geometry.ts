export interface Point {
  x: number;
  y: number;
}

export function deg2rad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function rad2deg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angle: number
): Point {

  const r = deg2rad(angle);

  return {
    x: cx + radius * Math.cos(r),
    y: cy + radius * Math.sin(r),
  };
}

export function clamp(
  value: number,
  min: number,
  max: number
): number {

  return Math.min(
    max,
    Math.max(min, value)
  );
}
