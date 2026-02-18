<script setup lang="ts"></script>

<template>
  <section>
    <nav>
      <a href="#about">Over mij</a>
      <a href="#projects">Projecten</a>
    </nav>
  </section>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--primary-color);
  box-shadow: 0px 5px 7px var(--primary-color);
  transition: box-shadow 0.2s;
  overflow-x: scroll;
}

nav:hover {
  box-shadow: 0px 5px 1px var(--primary-color);
}

nav > a {
  padding: 1em;
  color: var(--primary-color);
  background-color: var(--primary-bg);
}

nav > a:hover {
  color: var(--primary-bg);
  background-color: var(--primary-color);
}

nav > a:active {
  color: var(--primary-color);
  background-color: var(--primary-bg);
}
</style>
