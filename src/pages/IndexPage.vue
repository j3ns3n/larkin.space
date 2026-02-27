<template>
  <q-page class="index-page">
    <HeroSection @scroll-down="scrollToAbout" />
    <main style="min-height: 100vh">
      <AboutSection ref="aboutRef" />
      <div class="paired-sections section">
        <SkillsSection />
        <ExperienceSection />
      </div>
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import SkillsSection from 'components/SkillsSection.vue'
import ExperienceSection from 'components/ExperienceSection.vue'
import CertificationsSection from 'components/CertificationsSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import ContactSection from 'components/ContactSection.vue'
import FooterSection from 'components/FooterSection.vue'
// JSON-LD is provided at build-time; runtime injection removed.

const aboutRef = ref(null)

function scrollToAbout() {
  const el = aboutRef.value?.$el
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 40
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.index-page {
  background: $dark-page;
}

.paired-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: stretch;

  :deep(.section) {
    max-width: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  :deep(.glass-card) {
    flex: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    :deep(.section:first-child) {
      order: 2;
    }
    :deep(.section:last-child) {
      order: 1;
    }
  }
}
</style>
