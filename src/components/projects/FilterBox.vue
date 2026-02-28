<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "change", newQuery?: string): void;
}>();

const { placeholder = "Filter..." } = defineProps<{ placeholder?: string }>();

const query = ref<string>();

function onChanged(_payload: Event) {
  emit("change", query.value);
}
</script>

<template>
  <div class="filter">
    <input
      type="text"
      :placeholder="placeholder"
      name="filter"
      id="filter"
      data-test="query-input"
      v-model="query"
      @change="onChanged"
    />
    <button @click="onChanged" data-test="filter-button">Filter</button>
  </div>
</template>

<style lang="css" scoped>
.filter {
  background-color: white;
  width: 100%;
  display: flex;
  padding: 0.2em;
  padding-left: 1em;
  border: 1px solid var(--primary-color);
  box-shadow: var(--default-shadow);
  box-sizing: border-box;
  transition: box-shadow 0.2s;
}

.filter > input {
  flex-grow: 1;
  border: unset;
  width: inherit;
}

.filter > input:focus {
  outline: none;
}
</style>
