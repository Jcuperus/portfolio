<script setup lang="ts">
import ExperienceContainer from "@/components/ExperienceContainer.vue";
import type { ExperienceItem } from "@/models/experience_item";

const props = defineProps<{
  experience_items: ExperienceItem[];
}>();
</script>

<template>
  <div class="card-container">
    <template v-if="experience_items.length > 0">
      <ExperienceContainer
        v-for="experience_item in experience_items"
        v-if="experience_items.length > 0"
        data-test="experience-item"
        :experience="experience_item"
      />
    </template>
    <div v-else data-test="placeholder">No items</div>
  </div>
</template>
