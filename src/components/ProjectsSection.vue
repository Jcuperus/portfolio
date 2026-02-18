<script setup lang="ts">
import ExperienceList from "@/components/Experience/ExperienceList.vue";

import ArticleTitle from "@/components/ArticleTitle.vue";
import FilterBox from "@/components/Experience/FilterBox.vue";
import {
  experience_items as all_experience_items,
  queryExperienceItem,
} from "@/models/experience_item";
import { ref } from "vue";

const experience_items = ref(all_experience_items);

function filterProjects(query?: string) {
  if (!query || query === "") {
    experience_items.value = all_experience_items;
  } else {
    const filtered_items = all_experience_items.filter((exp_item) =>
      queryExperienceItem(exp_item, query),
    );

    experience_items.value = filtered_items;
  }
}
</script>

<template>
  <section>
    <ArticleTitle title="projecten" id="projects" />
    <FilterBox @change="filterProjects" />
    <ExperienceList :experience_items="experience_items" />
  </section>
</template>
