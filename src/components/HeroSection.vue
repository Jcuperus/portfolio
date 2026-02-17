<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

const canvasRef = useTemplateRef("hero-canvas");
onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  const width = canvas.width;
  const height = canvas.height;
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // const y = Math.floor((i / width) * 4);
    // const x = i % (width * 4);
    const col = (i / data.length) * 255;
    data[i] = col;
    data[i + 1] = col;
    data[i + 1] = col;
  }
  context.putImageData(imageData, 0, 0);
});
</script>

<template>
  <section class="hero">
    <canvas ref="hero-canvas"></canvas>
    <h1>jaep cuperus</h1>
  </section>
</template>

<style lang="css" scoped>
.hero > canvas {
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}
</style>
