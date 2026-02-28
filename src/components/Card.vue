<script setup lang="ts">
import ImageCenter from "./ImageCenter.vue";

const { title, thumbnailSrc } = defineProps<{
  title: string;
  thumbnailSrc?: string;
}>();
</script>

<template>
  <div class="card">
    <ImageCenter
      v-if="thumbnailSrc != null"
      data-test="thumbnail"
      class="head"
      :src="thumbnailSrc"
    />
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
