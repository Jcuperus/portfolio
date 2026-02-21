import type { Vector } from "@/models/vector";
import { distance, easeInOutCubic, squareDistance } from "@/utils/math";
import { onMounted, type ShallowRef } from "vue";
import { useColorPalette } from "./useColorPalette";
import { useMouse } from "./useMouse";

export function useCanvasSimulation(
  canvasRef: ShallowRef<HTMLCanvasElement | null>,
) {
  const { x: mouseX, y: mouseY } = useMouse();
  const { primaryBg } = useColorPalette();
  const canvasRatio = 2 / 5;
  const pointCount: Vector = {
    x: 50,
    y: Math.floor(50 * canvasRatio),
  };
  let pixelsPerPoint: Vector = { x: 10, y: 10 };

  onMounted(() => {
    function pointToCanvas(pointPos: Vector, pixelsPerPoint: Vector): Vector {
      return {
        x: pointPos.x * pixelsPerPoint.x,
        y: pointPos.y * pixelsPerPoint.y,
      };
    }

    function resize() {
      canvas.width = innerWidth;
      canvas.height = innerWidth * canvasRatio;

      pixelsPerPoint = {
        x: canvas.width / pointCount.x,
        y: canvas.height / pointCount.y,
      };
    }

    function doubleCircleWavePattern(
      position: Vector,
      currentTime: number,
      wave_frequency = 0.005,
      speed = 0.1,
    ) {
      let value = 1;
      value *= circleWavePattern(
        position,
        {
          x: canvas.width,
          y: canvas.height,
        },
        currentTime,
        wave_frequency,
        speed,
      );
      value *= circleWavePattern(
        position,
        {
          x: 0,
          y: 0,
        },
        currentTime,
        wave_frequency,
        speed,
      );

      return value;
    }

    function circleWavePattern(
      position: Vector,
      center: Vector,
      currentTime: number,
      wave_frequency = 0.005,
      speed = 0.1,
    ) {
      const distToBottomRight = distance(center, position);
      return Math.sin(
        wave_frequency * (distToBottomRight + currentTime * speed),
      );
    }

    function cursorInfluencePattern(
      position: Vector,
      cursor_pos: Vector,
      cutoff = 1500,
    ) {
      const cutoff_dist = cutoff * pixelsPerPoint.x;
      const cursor_dist = squareDistance(cursor_pos, position);

      return Math.max(0, cutoff_dist - cursor_dist) / cutoff_dist;
    }

    function fadeInPattern(currentTime: number, durationMs = 3000) {
      let value = currentTime / durationMs;

      return Math.min(1, easeInOutCubic(value));
    }

    function diminishBottom(position: Vector, strength = 0.9) {
      return 1.0 - (position.y / canvas.height) * strength;
    }

    function update(currentTime: number = 0) {
      const rect = canvas.getBoundingClientRect();
      // Get cursor position in canvas coordinates
      const cursor: Vector = {
        x: ((mouseX.value - rect.left) / rect.width) * canvas.width,
        y: ((mouseY.value - rect.top) / rect.height) * canvas.height,
      };
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = primaryBg.value;

      for (let y = 0; y < pointCount.y; y++) {
        for (let x = 0; x < pointCount.x; x++) {
          const pos: Vector = { x, y };
          pos.x += 0.5;
          pos.y += 0.5;
          const canvas_pos = pointToCanvas(pos, pixelsPerPoint);

          //Value determining the size of a point in a 0-1 range
          let pointValue = 1;
          let oscillator = Math.sin(currentTime * 0.0002) * 0.5 + 0.5;
          pointValue *= circleWavePattern(
            canvas_pos,
            { x: canvas.width * oscillator, y: 0 },
            currentTime,
          );
          pointValue *= circleWavePattern(
            canvas_pos,
            { x: canvas.width * (1.0 - oscillator), y: canvas.height },
            currentTime * 0.8,
          );

          const cursor_influence = cursorInfluencePattern(canvas_pos, cursor);
          pointValue = pointValue * (1 - cursor_influence);

          pointValue *= fadeInPattern(currentTime, canvas_pos.y * 10 + 5000);
          pointValue *= diminishBottom(canvas_pos);

          const size: Vector = {
            x: pixelsPerPoint.x * pointValue,
            y: pixelsPerPoint.y * pointValue,
          };
          canvas_pos.x -= size.x / 2;
          canvas_pos.y -= size.y / 2;
          context.fillRect(canvas_pos.x, canvas_pos.y, size.x, size.y);
        }
      }

      requestAnimationFrame(update);
    }

    if (!canvasRef.value) return;
    const canvas = canvasRef.value;

    const maybeContext = canvas.getContext("2d");
    if (!maybeContext) return;
    // Hacky solution so typescript doesn't think context is null from now on
    const context = maybeContext as CanvasRenderingContext2D;

    resize();

    window.addEventListener("resize", resize, false);

    update();
  });
}
