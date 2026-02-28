<script setup lang="ts">
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
