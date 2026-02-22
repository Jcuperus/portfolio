<script setup lang="ts">
import ArticleTitle from "./ArticleTitle.vue";
</script>

<template>
  <section>
    <ArticleTitle title="hallo" id="about" />
    <div class="split">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa placeat
          consectetur magnam maiores perferendis eius officiis dolore, sint
          cupiditate nostrum architecto exercitationem, excepturi cumque atque
          quis blanditiis fuga debitis. Quam.
        </p>
      </div>
      <div class="collage"></div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.split {
  display: grid;
  grid-template-columns: 1fr auto;
}

.collage {
  background-color: var(--primary-color);
  padding: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "main auto"
    "main auto";
}

.collage > img {
  grid-area: auto;
  width: 100%;
}

.collage > .main-img {
  grid-area: main;
  width: auto;
  max-height: 500px;
}
</style>
