<script setup lang="ts">
const { title, id } = defineProps<{ title: string, id: string }>()
</script>

<template>
    <a :href="'#' + id">
        <h1 :id="id" data-test="title">{{ title }}</h1>
    </a>
</template>

<style lang="css" scoped>
a {
    text-decoration-line: none;
    color: var(--primary-color);
}

a:hover {
    text-decoration-line: underline;
}
</style>