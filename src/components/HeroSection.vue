<script setup lang="ts">
import { useCanvasSimulation } from "@/composables/useCanvasSimulation";
import { useTemplateRef } from "vue";

const canvasRef = useTemplateRef("hero-canvas");
useCanvasSimulation(canvasRef);
</script>

<template>
  <canvas ref="hero-canvas"></canvas>
  <section class="hero">
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
  /* background-color: var(--primary-color); */
  color: var(--primary-bg);
  height: auto;
  width: 100%;
  aspect-ratio: 5/2;
}

.hero .text-box {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  margin-left: 1em;
  margin-right: 1em;
}

.hero h1,
.hero h2 {
  display: block;
  background-color: var(--primary-color);
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: max(3em, 12vw);
  padding-top: 0;
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
  display: inline-block;
  margin-left: auto;
}

canvas {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  z-index: -1;
  background-color: var(--primary-color);
}
</style>
