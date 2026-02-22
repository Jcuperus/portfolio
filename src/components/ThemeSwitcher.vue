<script setup lang="ts">
import { useColorPalette } from "@/composables/useColorPalette";

const { themes, changeTheme } = useColorPalette();
</script>

<template>
  <h3 class="primary-inverted">Verander thema</h3>
  <div class="themes">
    <button
      v-for="theme in themes"
      class="primary-inverted"
      @click="changeTheme(theme)"
    >
      {{ theme }}
    </button>
  </div>
</template>

<style lang="css" scoped>
h3 {
  text-align: center;
  width: 100%;
}

.themes > button {
  width: 100%;
  margin-bottom: 0.5em;
}
</style>
