<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import Navigation from "@/components/Navigation.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
</script>

<template>
  <HeroSection />
  <Navigation />
  <main>
    <SkillsSection />
    <ProjectsSection />
  </main>
  <Footer />
</template>
