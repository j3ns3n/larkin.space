<template>
  <section id="about" class="section fade-section" ref="el">
    <h2 class="section-title">About Me</h2>
    <div class="glass-card q-pa-lg">
      <p class="bio">
        I'm a software engineer with a Cyber Security degree and 5+ years of professional
        experience building production systems. My day-to-day revolves around the Laravel ecosystem
        — designing APIs, writing tests, and scaling backend architecture. On the frontend, I work
        with Vue.js to bring it all together.
      </p>
      <p class="bio q-mt-md">
        I care about writing clean, well-tested code and building tools that make other developers'
        lives easier. When I'm not coding, you'll find me outdoors — whether that's volunteering
        with young people or exploring the countryside.
      </p>
      <div class="section-subtitle q-mt-lg">Find me on</div>
      <div class="links">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn glass-card"
          :style="{ '--accent': link.color }"
          :aria-label="link.name"
        >
          <q-icon :name="link.icon" size="24px" />
          <q-tooltip>{{ link.name }}</q-tooltip>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useSocialsStore } from 'src/stores/socialsStore'
import { useReveal } from 'src/composables/useReveal'
const el = useReveal()

const socialsStore = useSocialsStore()
const links = computed(() => socialsStore.getSocials)
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

.links {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.link-btn {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 24px color-mix(in srgb, var(--accent) 30%, transparent);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
