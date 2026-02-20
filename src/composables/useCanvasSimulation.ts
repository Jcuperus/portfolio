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

    let lastTime = 0;
    let uptime = 0;

    context.fillStyle = fgColor;

    function pointToCanvas(pointPos: Vector): Vector {
      return {
        x: pointPos.x * pixPerPoint.x,
        y: pointPos.y * pixPerPoint.y,
      };
    }

    function update(currentTime: number = 0) {
      // Calculate elapsed time between last animation frame to we can move stuff without the speed depending on the framerate
      if (lastTime === 0) {
        lastTime = currentTime;
      }
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      uptime += deltaTime;
      // console.log(deltaTime);

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
          // const size = Math.max(1, (200 - cursor_dist) / 20);
          let size = 0.1;
          size *= Math.sin(0.1 * (x + uptime));
          // size *= Math.sin(0.05 * (x + uptime * 1.2));

          // size = Math.max(size, Math.sin(0.2 * (x - uptime * 5)) * 0.5 + 0.5);
          // size *= Math.sin(0.05 * (y + uptime * 20)) * 0.5 + 0.5;
          // size *= Math.max(Math.sin(0.1 * (y + uptime * 0.2)) * 0.5 + 0.5);

          // let size = (Math.sin((x + uptime) * 0.6) + 1) / 2;
          const cutoff_dist = 250;
          const cursor_dist = distance(cursor, canvas_pos);
          let cursor_influence =
            Math.max(0, cutoff_dist - cursor_dist) / cutoff_dist;
          size = cursor_influence - size;
          size *= 10;
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
