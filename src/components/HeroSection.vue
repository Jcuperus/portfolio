<script setup lang="ts">
import { useCanvasSimulation } from "@/composables/useCanvasSimulation";
import { useTemplateRef } from "vue";

const canvasRef = useTemplateRef("hero-canvas");
useCanvasSimulation(canvasRef);
</script>

<template>
  <section class="hero">
    <canvas ref="hero-canvas"></canvas>
    <div class="text-box">
      <h2>full-stack developer</h2>
      <h1>jaep cuperus</h1>
    </div>
  </section>
</template>

<style lang="css" scoped>
.hero {
  position: relative;
  height: auto;
  background-color: var(--primary-color);
  color: var(--primary-bg);
}

.hero .text-box {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  margin-right: 1em;
}

.hero h1,
.hero h2 {
  text-shadow: 0.02em 0.02em 0.02em var(--primary-color);
  margin: 0;
}

.hero h1 {
  font-size: max(3em, 12vw);
  padding-bottom: 0.3em;
  animation-name: slide-in;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}

.hero h2 {
  font-size: max(0.8em, 2vw);
  animation-name: slide-in;
  animation-delay: 2s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.hero canvas {
  display: block;
  width: 100%;
  image-rendering: pixelated;
}
</style>
