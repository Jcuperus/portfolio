<script setup lang="ts">
import { useCanvasSimulation } from "@/composables/useCanvasSimulation";
import { useTemplateRef } from "vue";

const canvasRef = useTemplateRef("hero-canvas");
useCanvasSimulation(canvasRef);
</script>

<template>
  <section class="hero">
    <canvas ref="hero-canvas"></canvas>
    <h1>jaep cuperus</h1>
  </section>
</template>

<style lang="css" scoped>
.hero {
  position: relative;
  height: auto;
  background-color: var(--primary-color);
  color: var(--primary-bg);
}

.hero > h1 {
  /* z-index: -1; */
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  margin: 0;
  padding-bottom: 0.3em;
  font-size: max(3em, 12vw);
  text-shadow: 0.05em 0.05em 0.02em var(--primary-color);
  /* background-color: var(--primary-color); */
}

.hero > canvas {
  display: block;
  width: 100%;
  image-rendering: pixelated;
}
</style>
