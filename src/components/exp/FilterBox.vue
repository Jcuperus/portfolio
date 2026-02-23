<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "change", new_query?: string): void;
}>();

const query = ref<string>();

function onChanged(_payload: Event) {
  emit("change", query.value);
}
</script>

<template>
  <div class="filter">
    <input
      type="text"
      placeholder="Filter projecten..."
      name="filter"
      id="filter"
      data-test="query-input"
      v-model="query"
      @change="onChanged"
    />
    <button @click="onChanged" data-test="filter-button">Filter</button>
  </div>
</template>
