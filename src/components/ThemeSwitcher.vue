<script setup lang="ts">
import { useColorPalette } from "@/composables/useColorPalette";

const { themes, changeTheme } = useColorPalette();
</script>

<template>
  <ul>
    <li v-for="theme in themes" @click="changeTheme(theme)">{{ theme }}</li>
  </ul>
</template>
