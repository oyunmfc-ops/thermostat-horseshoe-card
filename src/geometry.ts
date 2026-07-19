export interface Point {
  x: number;
  y: number;
}

export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angle: number
): Point {

  const rad = (angle - 90) * Math.PI / 180;

  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad)
  };
}

export function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string {

  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);

  const largeArcFlag =
    endAngle - startAngle <= 180 ? 0 : 1;

  return `
    M ${start.x} ${start.y}
    A ${radius} ${radius}
      0
      ${largeArcFlag}
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
