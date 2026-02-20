<template>
  <section class="section fade-section" ref="el">
    <h2 class="section-title">Experience</h2>
    <div class="glass-card q-pa-lg">
      <div class="roles">
        <div v-for="exp in experiences" :key="exp.title + exp.company" class="role">
          <div class="role-logo-wrap">
            <img :src="exp.logo" :alt="exp.company" class="role-logo" />
          </div>
          <div class="role-right">
            <h3 class="role-title">{{ exp.title }}</h3>
            <a
              :href="exp.url"
              target="_blank"
              rel="noopener noreferrer"
              class="role-company"
              :style="{ '--accent': exp.color }"
            >
              {{ exp.company }}
            </a>
            <span class="role-date">{{ exp.startDate }} — {{ exp.endDate || 'Present' }}</span>
            <p class="role-desc">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReveal } from 'src/composables/useReveal'
import { useExperienceStore } from 'src/stores/experienceStore'

const el = useReveal(0.1)
const experienceStore = useExperienceStore()

const experiences = computed(() => experienceStore.getExperiences)
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
}

.roles {
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: left;
  max-width: 580px;
  margin: 0 auto;
}

.role {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.role-logo-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.role-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  filter: grayscale(1) brightness(1.4);
  opacity: 0.7;
  transition: all 0.3s ease;

  .role:hover & {
    filter: none;
    opacity: 1;
  }
}

.role-right {
  display: flex;
  flex-direction: column;
}

.role-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
}

.role-company {
  font-size: 0.85rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  width: fit-content;

  &:hover {
    opacity: 0.75;
  }
}

.role-date {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 4px;
}

.role-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin: 8px 0 0;
  font-weight: 300;
}
</style>
