<script setup lang="ts">
import Card from "../Card.vue";
import ProjectContainer from "./ProjectContainer.vue";
import type { Project } from "@/models/project";

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <TransitionGroup tag="div" class="card-container" name="card">
    <ProjectContainer
      v-for="projectItem in projects"
      v-if="projects.length > 0"
      data-test="project-item"
      :project="projectItem"
    />
    <div v-else data-test="placeholder">Geen projecten gevonden</div>
  </TransitionGroup>
</template>

<style lang="css" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  gap: 1em;
  margin: 1em 0;
}

.card-move,
.card-enter-active {
  transition: transform 0.5s ease;
  transition: opacity 0.5s ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
