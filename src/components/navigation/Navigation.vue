<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { useOnClickOutside } from "@/composables/useOnClickOutside";
import { Palette } from "@iconoir/vue";
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const showThemeMenu = ref(false);

useOnClickOutside("theme-switcher", () => {
  showThemeMenu.value = false;
});

function openThemes() {
  showThemeMenu.value = !showThemeMenu.value;
}
</script>

<template>
  <section>
    <nav>
      <NavigationItem anchor-selector="#skills">Vaardigheden</NavigationItem>
      <NavigationItem anchor-selector="#projects">Projecten</NavigationItem>
      <div style="position: relative" id="theme-switcher">
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
  transition: box-shadow 0.2s;
  margin-bottom: 1em;
  gap: 1em;
}

#theme-switcher .nav-btn {
  z-index: 11;
}

.theme-switch-container {
  position: absolute;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-bg);
  margin-top: -1px;
  right: 0;
  padding: 1em;
  min-width: 14em;
  z-index: 10;
}

nav a,
.nav-btn {
  border: 1px solid var(--primary-bg);
  align-content: center;
  text-decoration-line: underline;
  padding: 1em;
  color: var(--primary-color);
  background-color: var(--primary-bg);
  cursor: pointer;
  position: relative;
  z-index: 1;
  box-shadow: var(--default-shadow);
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
  border-bottom-color: var(--primary-color);
  box-shadow: unset;
}
</style>
