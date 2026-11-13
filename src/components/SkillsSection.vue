<template>
  <section id="skills" class="section fade-section" ref="el">
    <h2 class="section-title text-center">Tech Stack</h2>
    <div class="glass-card q-pa-lg">
      <div class="categories">
        <div v-for="category in categories" :key="category.name" class="category">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills">
            <span
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill"
              :style="{ '--c': skill.color }"
            >
              <span
                v-if="skill.img"
                class="skill-icon-mask"
                :style="{ maskImage: `url(${skill.img})`, webkitMaskImage: `url(${skill.img})` }"
              />
              <q-icon v-else :name="resolveIcon(skill.icon)" size="14px" />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReveal } from 'src/composables/useReveal'
import { useSkillsStore } from 'src/stores/skillsStore'
import { resolveIcon } from 'src/utils/icons'

const el = useReveal(0.1)
const skillsStore = useSkillsStore()

const categories = computed(() => skillsStore.getCategories)
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.category-title {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 12px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.skill-icon-mask {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: currentColor;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.skill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
  background: color-mix(in srgb, var(--c) 8%, transparent);
  color: var(--c);
  white-space: nowrap;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background: color-mix(in srgb, var(--c) 15%, transparent);
      border-color: color-mix(in srgb, var(--c) 50%, transparent);
      transform: translateY(-2px);
    }
  }
}
</style>
