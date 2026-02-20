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
