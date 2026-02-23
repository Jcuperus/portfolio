<script setup lang="ts">
const { anchorSelector } = defineProps<{
  anchorSelector: string;
}>();

function navigateTo(event: PointerEvent) {
  event.preventDefault();

  const anchorElement = document.querySelector(anchorSelector);
  if (!anchorElement) return;
  anchorElement.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <a @click="navigateTo"><slot></slot></a>
</template>
