<script setup lang="ts">
import ExperienceContainer from "./ExperienceContainer.vue";
import type { ExperienceItem } from "@/models/experience_item";

const props = defineProps<{
  experience_items: ExperienceItem[];
}>();
</script>

<template>
  <TransitionGroup tag="div" class="card-container" name="card">
    <ExperienceContainer
      v-for="experience_item in experience_items"
      v-if="experience_items.length > 0"
      data-test="experience-item"
      :experience="experience_item"
    />
    <div v-else data-test="placeholder">Geen projecten gevonden</div>
  </TransitionGroup>
</template>
