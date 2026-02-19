<template>
  <q-page class="index-page">
    <HeroSection @scroll-down="scrollToAbout" />
    <AboutSection ref="aboutRef" />
    <LinksSection />
    <ProjectsSection />
    <FooterSection />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import LinksSection from 'components/LinksSection.vue'
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
