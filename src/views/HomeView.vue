<script setup lang="ts">
import ExperienceList from '@/components/ExperienceList.vue';
import type { ExperienceItem } from '@/models/experience_item';

import { experience_items } from '@/experience_data';

</script>

<template>
    <h1>home</h1>
    <ExperienceList :experience_items="experience_items" />
</template>