<script setup lang="ts">
import ExperienceContainer from "@/components/ExperienceContainer.vue";
import type { ExperienceItem } from "@/models/experience_item";

const props = defineProps<{
  experience_items: ExperienceItem[];
}>();
</script>

<template>
  <TransitionGroup tag="div" class="card-container" name="list">
    <ExperienceContainer
      v-for="experience_item in experience_items"
      v-if="experience_items.length > 0"
      data-test="experience-item"
      :experience="experience_item"
    />
    <div v-else data-test="placeholder">No items</div>
  </TransitionGroup>
</template>
