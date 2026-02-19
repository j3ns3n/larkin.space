<template>
  <section class="section fade-section" ref="el">
    <div class="section-title text-center">Connect</div>
    <div class="links">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="link-btn glass-card"
        :style="{ '--accent': link.color }"
      >
        <q-icon :name="link.icon" size="24px" />
        <q-tooltip>{{ link.name }}</q-tooltip>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReveal } from 'src/composables/useReveal'
import { useSocialsStore } from 'src/stores/socialsStore'

const el = useReveal()

const socialsStore = useSocialsStore()
const links = computed(() => socialsStore.getSocials)
</script>

<style lang="scss" scoped>
.links {
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
