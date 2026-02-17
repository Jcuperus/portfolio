<script setup lang="ts">
const { src } = defineProps<{
    src?: string,
}>();
</script>

<template>
    <div class="img-container">
        <img v-if="src != null" :src="src" alt="thumbnail-image">
        <img v-else src="/src/assets/images/thumbnail-placeholder.svg" alt="thumbnail-image">
    </div>
</template>

<style scoped>
.img-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
}

.img-container>img {
    height: auto;
    width: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
}
</style>