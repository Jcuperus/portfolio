import type { Vector } from "@/models/vector";

/**
 * Returns the euclidian distance between two points
 *
 * @param from from vector
 * @param to to vector
 */
export function distance(from: Vector, to: Vector): number {
  return Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
}

export function noise(position: Vector): number {
  return 0;
}

// export function fract(vec: Vector): Vector {
//   return {
//     x: vec.x % 1,
//     y: vec.y % 1,
//   };
// }

// export function floor(vec: Vector): Vector {
//   return {
//     x: Math.floor(vec.x),
//     y: Math.floor(vec.y),
//   };
// }

// export function perlin(position: Vector): number {

// }
