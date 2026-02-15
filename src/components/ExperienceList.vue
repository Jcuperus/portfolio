<script setup lang="ts">
import ExperienceContainer from '@/components/ExperienceContainer.vue';
import type { ExperienceItem } from '@/models/experience_item';

const props = defineProps<{
    experience_items: ExperienceItem[],
}>()
</script>

<template>
    <div class="exp-items">
        <ExperienceContainer v-for="experience_item in experience_items" data-test="experience-item"
            :experience="experience_item" />
    </div>
</template>