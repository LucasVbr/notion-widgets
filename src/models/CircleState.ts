import type PointState from './PointState';

type CircleState = {
  point: PointState
  radius?: number
  fill?: string
  stroke?: string
}

export default CircleState;