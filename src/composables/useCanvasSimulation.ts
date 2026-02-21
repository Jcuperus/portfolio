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
    const canvasRatio = 1 / 2;
    const pointCount: Vector = {
      x: 50,
      y: Math.floor(50 * canvasRatio),
    };

    let pixelsPerPoint: Vector = { x: 10, y: 10 };
    resize();

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

    let lastTime = 0;
    let uptime = 0;

    context.fillStyle = fgColor;

    function pointToCanvas(pointPos: Vector, pixelsPerPoint: Vector): Vector {
      return {
        x: pointPos.x * pixelsPerPoint.x,
        y: pointPos.y * pixelsPerPoint.y,
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

      for (let y = 0; y < pointCount.y; y++) {
        for (let x = 0; x < pointCount.x; x++) {
          const pos: Vector = { x, y };
          pos.x += 0.5;
          pos.y += 0.5;
          const canvas_pos = pointToCanvas(pos, pixelsPerPoint);

          //Value determining the size of a point in a 0-1 range
          let pointValue = 1;
          pointValue *= Math.sin(0.1 * (x + uptime));
          pointValue *= Math.sin(0.05 * (x + uptime * 1.2));

          pointValue = Math.max(
            pointValue,
            Math.sin(0.2 * (x - uptime * 5)) * 0.5 + 0.5,
          );
          pointValue *= Math.sin(0.05 * (y + uptime * 20)) * 0.5 + 0.5;
          pointValue *= Math.max(
            Math.sin(0.1 * (y + uptime * 0.2)) * 0.5 + 0.5,
          );

          //TODO: scale distance by viewport size
          const cutoff_dist = 250;
          const cursor_dist = distance(cursor, canvas_pos);
          let cursor_influence =
            Math.max(0, cutoff_dist - cursor_dist) / cutoff_dist;
          pointValue = cursor_influence - pointValue;
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

    function resize() {
      //TODO: update canvas config
      console.log("resize", innerWidth);
      canvas.width = innerWidth;
      canvas.height = innerWidth * canvasRatio;

      pixelsPerPoint = {
        x: canvas.width / pointCount.x,
        y: canvas.height / pointCount.y,
      };
    }

    window.addEventListener("resize", resize, false);

    update();
  });
}
