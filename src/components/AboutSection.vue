<script setup lang="ts">
import ArticleTitle from "./ArticleTitle.vue";
</script>

<template>
  <section>
    <ArticleTitle title="hoi!" id="about" />
    <div>
      <p>
        Ik ben Jaep, een ontwikkelaar die altijd op zoek is naar iets nieuws om
        te leren. Ik ben sterk in webdevelopment en voel me zowel op de front-
        als de backend thuis. Als programmeur kan ik goed zelfstandig uit de
        voeten en ik ben niet bang om diep in de code of documentatie te duiken
        om een probleem op te lossen. Dit betekent zeker niet dat ik geen
        teamspeler ben; ik vind het juist leuk om met collega’s te sparren en
        elkaar naar een hoger niveau te tillen.
      </p>
      <p>
        Mijn interesses zijn breed. Zo houd ik me al enkele jaren bezig met
        gamedevelopment, waarbij ik graag meedoe aan game jams en meedenk over
        het designproces. Op dit moment verdiep ik me ook in de fundamenten van
        mijn vak. Zo heb ik meer geleerd over de werking van computers door te
        experimenteren met Arch Linux. Daarnaast ben ik ook bezig om C++ te
        leren, wat me veel inzicht geeft in geheugenbeheer en hoe code wordt
        omgezet naar instructies voor de CPU.
      </p>
    </div>
  </section>
</template>

<style lang="css" scoped>
p {
  margin-top: 0;
  max-width: 50em;
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
