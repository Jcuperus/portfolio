<script setup lang="ts">
import AboutSection from "@/components/AboutSection.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
</script>

<template>
  <HeroSection />
  <Navigation />
  <main>
    <AboutSection class="smaller" />
    <SkillsSection class="smaller right" />
    <ProjectsSection />
  </main>
  <Footer />
</template>
