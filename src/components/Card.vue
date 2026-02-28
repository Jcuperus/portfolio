<script setup lang="ts">
import ImageCenter from "./ImageCenter.vue";

const { title, thumbnail_src } = defineProps<{
  title: string;
  thumbnail_src?: string;
}>();
</script>

<template>
  <div class="card">
    <ImageCenter data-test="image" class="head" :src="thumbnail_src" />
    <div class="body">
      <h1 data-test="title">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  overflow: hidden;
  border: 1px solid var(--primary-color);
  box-shadow: var(--default-shadow);
}

h1 {
  margin: 0 0 1rem 0;
}

.card .head {
  border-bottom: 1px solid var(--primary-color);
}

.card .body {
  padding: 1em;
}
</style>
