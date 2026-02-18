<script setup lang="ts">
const { src } = defineProps<{
  src?: string;
}>();
</script>

<template>
  <div class="img-container">
    <img v-if="src != null" :src="src" alt="thumbnail-image" />
    <img
      v-else
      src="/src/assets/images/thumbnail-placeholder.svg"
      alt="thumbnail-image"
    />
  </div>
</template>

<style scoped>
.img-container {
  aspect-ratio: 3 / 2;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}

.img-container > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
