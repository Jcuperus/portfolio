<script setup lang="ts">
import ArticleTitle from "./ArticleTitle.vue";
</script>

<template>
  <section>
    <ArticleTitle title="vaardigheden" id="skills" />
    <div class="skills">
      <div class="skill">
        <p>Front-end development</p>
        <p>HTML, CSS, Javascript, Typescript, Vue, React, Angular</p>
      </div>
      <div class="skill">
        <p>Back-end development</p>
        <p>PHP, Laravel, Databases</p>
      </div>
      <div class="skill">
        <p>Webshops</p>
        <p>Magento 1 & 2</p>
      </div>
      <div class="skill">
        <p>Andere programmeertalen</p>
        <p>Python, Java, C#</p>
      </div>
      <div class="skill">
        <p>Tools</p>
        <p>Git, Docker, Linux</p>
      </div>
      <div class="skill">
        <p>Talen</p>
        <p>Nederlands, Engels, Fries</p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.skills {
  max-width: 50em;
}

.skill {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  border-bottom: 3px solid var(--primary-color);
  padding: 1em 0;
}

.skill p {
  margin: 0;
}

.skill p:first-child {
  font-style: italic;
  font-weight: bold;
}
</style>
