<script setup lang="ts">
import ExperienceList from "@/components/experience/ExperienceList.vue";

import ArticleTitle from "@/components/ArticleTitle.vue";
import FilterBox from "@/components/experience/FilterBox.vue";
import { useExperienceItems } from "@/composables/useExperienceItems.ts";

const { experienceItems, filter } = useExperienceItems();
</script>

<template>
  <section>
    <ArticleTitle title="projecten" id="projects" />
    <FilterBox @change="filter" />
    <ExperienceList :experienceItems="experienceItems" />
  </section>
</template>
