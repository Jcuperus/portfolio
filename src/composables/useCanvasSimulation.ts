import { onMounted, type ShallowRef } from "vue";
import { useMouse } from "./useMouse";
import type { Vector } from "@/models/vector";
import { distance } from "@/utils/math";

export function useCanvasSimulation(
  canvasRef: ShallowRef<HTMLCanvasElement | null>,
) {
  const { x: mouseX, y: mouseY } = useMouse();

  onMounted(() => {
    if (!canvasRef.value) return;
    const canvas = canvasRef.value;
    const maybeContext = canvas.getContext("2d");
    if (!maybeContext) return;
    // Hacky solution so typescript doesn't think context is null from now on
    const context = maybeContext as CanvasRenderingContext2D;

    const fgColor = getComputedStyle(context.canvas).getPropertyValue(
      "--primary-bg",
    );
    const bgColor = getComputedStyle(context.canvas).getPropertyValue(
      "--primary-color",
    );

    const pointsSize: Vector = {
      x: Math.floor(canvas.width / 10),
      y: Math.floor(canvas.height / 10),
    };
    const pixPerPoint: Vector = {
      x: canvas.width / pointsSize.x,
      y: canvas.height / pointsSize.y,
    };

    context.fillStyle = fgColor;

    function pointToCanvas(pointPos: Vector): Vector {
      return {
        x: pointPos.x * pixPerPoint.x,
        y: pointPos.y * pixPerPoint.y,
      };
    }

    function update() {
      const rect = canvas.getBoundingClientRect();
      // Get cursor position in canvas coordinates
      const cursor: Vector = {
        x: ((mouseX.value - rect.left) / rect.width) * canvas.width,
        y: ((mouseY.value - rect.top) / rect.height) * canvas.height,
      };
      context.clearRect(0, 0, rect.width, rect.height);

      for (let y = 0; y < pointsSize.y; y++) {
        for (let x = 0; x < pointsSize.x; x++) {
          const pos: Vector = { x, y };
          pos.x += 0.5;
          pos.y += 0.5;
          const canvas_pos = pointToCanvas(pos);
          const cursor_dist = distance(cursor, canvas_pos);
          const size = Math.max(1, (200 - cursor_dist) / 20);
          canvas_pos.x -= size / 2;
          canvas_pos.y -= size / 2;
          context.fillRect(canvas_pos.x, canvas_pos.y, size, size);
        }
      }

      requestAnimationFrame(update);
    }

    update();
  });
}
