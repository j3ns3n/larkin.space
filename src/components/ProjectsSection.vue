<template>
  <section class="section fade-section" ref="el">
    <div class="section-title text-center">My Projects</div>
    <div class="grid">
      <a
        v-for="project in projects"
        :key="project.name"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="glass-card card q-pa-lg"
      >
        <div class="card-top">
          <q-icon name="fab fa-github" size="20px" class="text-grey-6" />
          <div class="card-top-right">
            <q-icon name="open_in_new" size="16px" class="text-grey-7 ext-icon" />
          </div>
        </div>
        <span class="row">
          <h3 class="card-title">{{ project.name }}</h3>
          <q-badge
            v-if="project.archived"
            color="yellow-9"
            label="Archived"
            class="archived q-mt-md q-ml-sm"
            outline
          />
        </span>
        <p class="card-desc">{{ project.description }}</p>

        <div class="tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="tag"
            :style="{ '--c': projectStore.getTagInfo(tag).color || '#00d4ff' }"
          >
            <q-icon :name="projectStore.getTagInfo(tag).icon || 'fas fa-code'" size="12px" />
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReveal } from 'src/composables/useReveal'
import { useProjectStore } from 'src/stores/projectStore'

const el = useReveal(0.1)
const projectStore = useProjectStore()

const projects = computed(() => projectStore['getProjects'])
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  min-height: 220px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-top-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.archived {
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 8px;
  max-height: 16.4px;
}

.ext-icon {
  opacity: 0;
  transition: opacity 0.2s;
  .card:hover & {
    opacity: 1;
  }
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 10px;
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 16px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
  background: color-mix(in srgb, var(--c) 8%, transparent);
  color: var(--c);
  white-space: nowrap;
}
</style>
