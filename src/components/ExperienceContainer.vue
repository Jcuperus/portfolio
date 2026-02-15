<script setup lang="ts">
import type { ExperienceItem } from '@/models/experience_item';

const props = defineProps<{ experience: ExperienceItem }>()
</script>

<template>
    <div class="exp-container">
        <div class="head">
            <h1 data-test="title">{{ experience.title }}</h1>
            <div class="technologies" data-test="technologies">
                <span v-for="technology in experience.technologies">{{ technology }}</span>
            </div>
        </div>
        <div class="body">
            <p data-test="body">{{ experience.body }}</p>
        </div>
    </div>
</template>