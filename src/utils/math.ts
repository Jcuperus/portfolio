import type { Vector } from "@/models/vector";

/**
 * Returns the euclidian distance between two points
 *
 * @param from from vector
 * @param to to vector
 * @returns number distance
 */
export function distance(from: Vector, to: Vector): number {
  return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
}

/**
 * Returns the squared euclidian distance between two points, skips the square root for better performance
 *
 * @param from from vector
 * @param to to vector
 * @returns number square distance
 */
export function squareDistance(from: Vector, to: Vector): number {
  return Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2);
}

export function lerp(a: number, b: number, t: number): number {
  return (1 - t) * a + t * b;
}

export function easeInCubic(x: number): number {
  return x * x * x;
}

export function easeInSine(x: number): number {
  return 1 - Math.cos((x * Math.PI) / 2);
}

export function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
