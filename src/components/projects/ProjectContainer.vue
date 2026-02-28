<script setup lang="ts">
import type { Project } from "@/models/project";
import ImageCenter from "@/components/ImageCenter.vue";
import { City, Link, Git, Code } from "@iconoir/vue";

const props = defineProps<{ project: Project }>();
</script>

<template>
  <div class="card">
    <div class="head primary-inverted">
      <ImageCenter data-test="image" :src="props.project.thumbnailImage" />
      <h1 data-test="title">{{ project.title }}</h1>
    </div>
    <div class="body">
      <div class="info">
        <div v-if="project.company" class="info-item" data-test="company">
          <City />{{ project.company }}
        </div>
        <div v-if="project.link" class="info-item">
          <Link />
          <a data-test="link" :href="project.link">{{ project.link }}</a>
        </div>
        <div v-if="project.source" class="info-item">
          <Git />
          <a data-test="source" :href="project.source">{{ project.source }}</a>
        </div>
        <div class="info-item" data-test="technologies">
          <Code />
          {{ project.technologies.join(" • ") }}
        </div>
      </div>
      <p data-test="body">{{ project.body }}</p>
    </div>
  </div>
</template>
