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
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: white;
}

.img-container > img {
  height: 100%;
}
</style>
