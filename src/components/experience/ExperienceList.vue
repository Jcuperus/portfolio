<script setup lang="ts">
import ExperienceContainer from "./ExperienceContainer.vue";
import type { ExperienceItem } from "@/models/experience_item";

const props = defineProps<{
  experienceItems: ExperienceItem[];
}>();
</script>

<template>
  <TransitionGroup tag="div" class="card-container" name="card">
    <ExperienceContainer
      v-for="experienceItem in experienceItems"
      v-if="experienceItems.length > 0"
      data-test="experience-item"
      :experience="experienceItem"
    />
    <div v-else data-test="placeholder">Geen projecten gevonden</div>
  </TransitionGroup>
</template>
