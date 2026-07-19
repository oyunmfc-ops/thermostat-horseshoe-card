export interface Point {
  x: number;
  y: number;
}

export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(max, Math.max(min, value));
}

export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

/*
 * 0° = üst
 * 90° = sağ
 * 180° = alt
 * 270° = sol
 */

export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angle: number
): Point {

  const rad = degToRad(angle - 90);

  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad)
  };
}

export function cartesianToAngle(
  x: number,
  y: number,
  cx: number,
  cy: number
): number {

  let angle =
    radToDeg(Math.atan2(y - cy, x - cx)) + 90;

  if (angle < 0)
    angle += 360;

  return angle;
}

export function pointOnArc(
  cx: number,
  cy: number,
  radius: number,
  angle: number
): Point {

  return polarToCartesian(
    cx,
    cy,
    radius,
    angle
  );

}

export function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string {

  const start = pointOnArc(
    cx,
    cy,
    radius,
    startAngle
  );

  const end = pointOnArc(
    cx,
    cy,
    radius,
    endAngle
  );

  const delta = endAngle - startAngle;

  const largeArc = delta > 180 ? 1 : 0;

  return `
    M ${start.x} ${start.y}
    A ${radius} ${radius}
      0
      ${largeArc}
      0
      ${end.x}
      ${end.y}
  `;
}

export function temperatureToAngle(
  value: number,
  minTemp: number,
  maxTemp: number,
  startAngle: number,
  endAngle: number
): number {

  value = clamp(
    value,
    minTemp,
    maxTemp
  );

  const percent =
    (value - minTemp) /
    (maxTemp - minTemp);

  return (
    startAngle +
    percent *
    (endAngle - startAngle)
  );

}

export function angleToTemperature(
  angle: number,
  minTemp: number,
  maxTemp: number,
  startAngle: number,
  endAngle: number
): number {

  const percent =
    (angle - startAngle) /
    (endAngle - startAngle);

  return (
    minTemp +
    percent *
    (maxTemp - minTemp)
  );

}
