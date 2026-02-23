<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { Palette } from "@iconoir/vue";
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const showThemeMenu = ref(false);

function openThemes() {
  showThemeMenu.value = !showThemeMenu.value;
}
</script>

<template>
  <section>
    <nav>
      <NavigationItem anchor-selector="#skills">Vaardigheden</NavigationItem>
      <NavigationItem anchor-selector="#projects">Projecten</NavigationItem>
      <div style="position: relative">
        <div
          class="nav-btn"
          :class="{ active: showThemeMenu }"
          @click="openThemes"
        >
          <Palette />
        </div>
        <div class="theme-switch-container" v-show="showThemeMenu">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </section>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--primary-color);
  transition: box-shadow 0.2s;
}

.theme-switch-container {
  position: absolute;
  background-color: var(--primary-color);
  border-top: 0;
  right: 0;
  padding: 1em;
  min-width: 14em;
}

nav a,
.nav-btn {
  align-content: center;
  text-decoration-line: underline;
  padding: 1em;
  color: var(--primary-color);
  background-color: var(--primary-bg);
  cursor: pointer;
}

nav a:hover,
.nav-btn:hover {
  color: var(--primary-bg);
  background-color: var(--primary-color);
}

nav a:active {
  color: var(--primary-color);
  background-color: var(--primary-bg);
}

.nav-btn.active {
  color: var(--primary-bg);
  background-color: var(--primary-color);
}
</style>
