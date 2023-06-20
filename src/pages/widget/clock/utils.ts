import type LineState from '../../../models/LineState';
import type PointState from '../../../models/PointState';
import type CircleState from '../../../models/CircleState';

export const buildTimeIndicators = (
    centerPoint: PointState,
    canvas: {size: number},
    count: number,
    size: number,
) => {
  const pi2 = Math.PI * 2;

  let l: LineState[] = [];
  const offset = canvas.size / (3 + 1/3)
  const angle = pi2 / count;

  for (let i = 0; i < count; i++) {
    const t = i * angle;
    const cosValue = Math.cos(t);
    const sinValue = Math.sin(t);

    const newPointA: PointState = {
      x: centerPoint.x + offset * cosValue,
      y: centerPoint.y + offset * sinValue,
    };

    const newPointB: PointState = {
      x: centerPoint.x + (offset + size) * cosValue,
      y: centerPoint.y + (offset + size) * sinValue,
    };

    l.push({a: newPointA, b: newPointB});
  }
  return l;
};

export const buildDials = (
    centerPoint: PointState,
    min: number,
    max: number,
    count: number
) => {
  const result: CircleState[] = [];
  const step = (max - min) / count;

  for (let i = 1; i <= count; i++) {
    const newCircle = {
      radius: min + (step * i),
      point: centerPoint
    };

    result.push(newCircle)
  }

  return result;
};