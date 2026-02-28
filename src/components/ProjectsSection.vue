<script setup lang="ts">
import ProjectList from "@/components/projects/ProjectList.vue";

import ArticleTitle from "@/components/ArticleTitle.vue";
import FilterBox from "@/components/projects/FilterBox.vue";
import { useProjects } from "@/composables/useProjects";

const { projects, filter } = useProjects();
</script>

<template>
  <section>
    <ArticleTitle title="projecten" id="projects" />
    <FilterBox @change="filter" />
    <ProjectList :projects="projects" />
  </section>
</template>
