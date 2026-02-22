<script setup lang="ts">
import { useColorPalette } from "@/composables/useColorPalette";

const { themes, currentTheme, changeTheme } = useColorPalette();
</script>

<template>
  <h3 class="primary-inverted">Verander thema</h3>
  <div class="themes">
    <button
      v-for="theme in themes"
      class="primary-inverted"
      :class="{ selected: theme == currentTheme }"
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
  text-transform: capitalize;
}

button.selected {
  font-weight: bold;
  text-decoration-line: underline;
}
</style>
