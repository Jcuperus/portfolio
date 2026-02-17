<script setup lang="ts">
import ExperienceList from "@/components/ExperienceList.vue";

import { experience_items as all_experience_items } from "@/experience_data";
import ArticleTitle from "@/components/ArticleTitle.vue";
import { ref } from "vue";

const experience_items = ref(all_experience_items);

function filterProjects(payload: Event) {
  if (!payload.target || !("value" in payload.target)) {
    return;
  }

  const query = payload.target.value as string;
  if (query === "") {
    experience_items.value = all_experience_items;
  } else {
    const filtered_items = all_experience_items.filter(
      (value) =>
        value.title.includes(query) ||
        value.body.includes(query) ||
        value.technologies.some((technology) =>
          technology.toLowerCase().includes(query),
        ),
    );

    experience_items.value = filtered_items;
  }
}
</script>

<template>
  <article>
    <h1>jaep cuperus</h1>
  </article>
  <article>
    <ArticleTitle title="projecten" id="projects" />
    <div class="filter">
      <input
        type="text"
        placeholder="Filter projects..."
        name="filter"
        id="filter"
        @change="filterProjects"
      />
    </div>
    <ExperienceList :experience_items="experience_items" />
  </article>
</template>
