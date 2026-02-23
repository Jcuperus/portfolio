<script setup lang="ts"></script>

<template>
  <footer>
    <div class="content">
      <h1>jaep cuperus</h1>
      <div class="links">
        <div>
          <a href="https://github.com/Jcuperus">GitHub</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jaep-cuperus-b20463155/"
            >LinkedIn</a
          >
        </div>
        <div>
          <a href="https://zyzamo.itch.io/">Itch</a>
        </div>
        <div>
          <a href="mailto:jaepcuperus@hotmail.com">Mail</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
footer {
  background-color: var(--primary-color);
  margin-top: 4em;
}

footer h1 {
  align-content: center;
}

.content {
  max-width: var(--max-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em 0;
}

.links {
  list-style: none;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
}

a {
  color: var(--primary-bg);
}
</style>
