<script setup lang="ts">
import AboutSection from "@/components/AboutSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import Navigation from "@/components/Navigation.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
</script>

<template>
  <HeroSection />
  <Navigation />
  <main>
    <AboutSection />
    <ProjectsSection />
  </main>
</template>
