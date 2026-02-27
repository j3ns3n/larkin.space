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
import { ref, computed } from 'vue'
import { useMeta } from 'quasar'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import SkillsSection from 'components/SkillsSection.vue'
import ExperienceSection from 'components/ExperienceSection.vue'
import CertificationsSection from 'components/CertificationsSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import ContactSection from 'components/ContactSection.vue'
import FooterSection from 'components/FooterSection.vue'
import { useSkillsStore } from 'src/stores/skillsStore'
import { useExperienceStore } from 'src/stores/experienceStore'
import { useSocialsStore } from 'src/stores/socialsStore'
import { useCertificationsStore } from 'src/stores/certificationsStore'

const skillsStore = useSkillsStore()
const experienceStore = useExperienceStore()
const socialsStore = useSocialsStore()
const certificationsStore = useCertificationsStore()

const personJsonLd = computed(() => {
  const skills = skillsStore.getCategories.flatMap((c) => c.skills.map((s) => s.name))
  const currentJob = experienceStore.getExperiences[0]
  const sameAs = socialsStore.getSocials
    .map((s) => s.url)
    .filter((url) => !url.startsWith('mailto:'))
  const credentials = certificationsStore.getCertifications.map((cert) => ({
    '@type': 'EducationalOccupationalCredential',
    name: cert.name,
    credentialCategory: 'certificate',
    recognizedBy: { '@type': 'Organization', name: cert.issuer },
    url: cert.credentialUrl,
  }))

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jensen Larkin',
    givenName: 'Jensen',
    familyName: 'Larkin',
    jobTitle: currentJob?.title ?? 'Software Engineer',
    url: 'https://larkin.space',
    email: 'jensen@larkin.space',
    description:
      'Software Engineer based in the UK, specialising in Laravel, Vue.js, and scalable backend systems.',
    image: 'https://larkin.space/icons/favicon-96x96.png',
    address: { '@type': 'PostalAddress', addressCountry: 'GB' },
    worksFor: {
      '@type': 'Organization',
      name: currentJob?.company ?? 'axitech',
      url: currentJob?.url ?? 'https://axitech.co',
    },
    knowsAbout: skills,
    hasCredential: credentials,
    knowsLanguage: 'en',
    sameAs,
  })
})

useMeta(() => ({
  script: {
    'json-ld-person': {
      type: 'application/ld+json',
      innerHTML: personJsonLd.value,
    },
    'json-ld-website': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Jensen Larkin',
        url: 'https://larkin.space',
        description: 'Portfolio of Jensen Larkin, Software Engineer based in the UK.',
      }),
    },
  },
}))

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
