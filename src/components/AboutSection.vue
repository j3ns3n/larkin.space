<template>
  <section class="section fade-section" ref="el">
    <div class="section-title">About</div>
    <div class="glass-card q-pa-lg">
      <p class="bio">
        I'm a software engineer with a focus on backend engineering using the Laravel ecosystem. I
        enjoy building clean, scalable systems and exploring new technologies along the way.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from 'src/composables/useReveal'
const el = useReveal()
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
}

.bio {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 300;
  max-width: 580px;
  margin: 0 auto;
}
</style>
