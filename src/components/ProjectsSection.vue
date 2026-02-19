<script setup lang="ts">
import ExperienceList from "@/components/Experience/ExperienceList.vue";

import ArticleTitle from "@/components/ArticleTitle.vue";
import FilterBox from "@/components/Experience/FilterBox.vue";
import { useExperienceItems } from "@/composables/useExperienceItems.ts";

const { experience_items, filter } = useExperienceItems();
</script>

<template>
  <section>
    <ArticleTitle title="projecten" id="projects" />
    <FilterBox @change="filter" />
    <ExperienceList :experience_items="experience_items" />
  </section>
</template>
