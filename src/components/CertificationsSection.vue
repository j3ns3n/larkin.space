<template>
  <section id="certifications" class="section fade-section" ref="el">
    <h2 class="section-title text-center">Certifications</h2>
    <div class="cert-grid">
      <a
        v-for="cert in certifications"
        :key="cert.name"
        :href="cert.credentialUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="cert-card glass-card"
        :style="{ '--accent': cert.color }"
      >
        <div class="cert-icon-wrap">
          <q-icon :name="cert.icon" size="28px" />
        </div>
        <h3 class="cert-name">{{ cert.name }}</h3>
        <span class="cert-issuer">{{ cert.issuer }}</span>
        <span class="cert-verify">
          <q-icon name="fas fa-arrow-up-right-from-square" size="10px" />
          Verify
        </span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReveal } from 'src/composables/useReveal'
import { useCertificationsStore } from 'src/stores/certificationsStore'

const el = useReveal(0.1)
const certificationsStore = useCertificationsStore()

const certifications = computed(() => certificationsStore.getCertifications)
</script>

<style lang="scss" scoped>
.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.cert-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 40px 26px;
  text-decoration: none;
  border-top: 2px solid color-mix(in srgb, var(--accent) 50%, transparent);
  cursor: pointer;
  min-width: 260px;
  max-width: 360px;
  flex: 1;

  &:hover {
    border-top-color: var(--accent);

    .cert-icon-wrap {
      background: color-mix(in srgb, var(--accent) 18%, transparent);
      transform: scale(1.08);
    }

    .cert-verify {
      opacity: 1;
      color: var(--accent);
    }
  }
}

.cert-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  color: var(--accent);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.cert-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 6px;
  line-height: 1.35;
}

.cert-issuer {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

.cert-verify {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 14px;
  opacity: 0.6;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
