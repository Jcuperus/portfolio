<script setup lang="ts">
import type { Project } from "@/models/project";
import ImageCenter from "@/components/ImageCenter.vue";
import { City, Link, Git, Code } from "@iconoir/vue";
import Card from "../Card.vue";

const props = defineProps<{ project: Project }>();
</script>

<template>
  <Card :title="project.title" :thumbnail_src="project.thumbnailImage">
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
  </Card>
</template>
