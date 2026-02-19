<template>
  <q-page class="index-page">
    <HeroSection @scroll-down="scrollToAbout" />
    <div style="min-height: 100vh;">
      <AboutSection ref="aboutRef" />
      <ProjectsSection />
    </div>
    <FooterSection />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import FooterSection from 'components/FooterSection.vue'

const aboutRef = ref(null)

function scrollToAbout() {
  aboutRef.value?.$el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.index-page {
  background: $dark-page;
}
</style>
