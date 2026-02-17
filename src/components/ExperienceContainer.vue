<script setup lang="ts">
import type { ExperienceItem } from "@/models/experience_item";
import ImageCenter from "./ImageCenter.vue";

const props = defineProps<{ experience: ExperienceItem }>();
</script>

<template>
  <div class="card">
    <div class="head primary-inverted">
      <ImageCenter data-test="image" :src="props.experience.thumbnail_image" />
      <h1 data-test="title">{{ experience.title }}</h1>
    </div>
    <div class="body">
      <div data-test="technologies">
        <span
          class="label secondary-inverted"
          v-for="technology in experience.technologies"
          >{{ technology }}</span
        >
      </div>
      <p data-test="body">{{ experience.body }}</p>
    </div>
  </div>
</template>
