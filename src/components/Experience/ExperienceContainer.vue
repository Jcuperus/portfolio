<script setup lang="ts">
import type { ExperienceItem } from "@/models/experience_item";
import ImageCenter from "@/components/ImageCenter.vue";
import { City, Link, Git, Code } from "@iconoir/vue";

const props = defineProps<{ experience: ExperienceItem }>();
</script>

<template>
  <div class="card">
    <div class="head primary-inverted">
      <ImageCenter data-test="image" :src="props.experience.thumbnail_image" />
      <h1 data-test="title">{{ experience.title }}</h1>
    </div>
    <div class="body">
      <div class="info">
        <div v-if="experience.company" class="info-item" data-test="company">
          <City />{{ experience.company }}
        </div>
        <div v-if="experience.link" class="info-item">
          <Link />
          <a data-test="link" :href="experience.link">{{ experience.link }}</a>
        </div>
        <div v-if="experience.source" class="info-item">
          <Git />
          <a data-test="source" :href="experience.source">{{
            experience.source
          }}</a>
        </div>
        <div class="info-item" data-test="technologies">
          <Code />
          {{ experience.technologies.join(" • ") }}
        </div>
      </div>
      <p data-test="body">{{ experience.body }}</p>
    </div>
  </div>
</template>
