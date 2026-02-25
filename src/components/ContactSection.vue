<template>
  <section id="contact" class="section fade-section" ref="el">
    <div class="glass-card q-pa-xl text-center">
      <h2 class="cta-title">Let's Connect</h2>
      <p class="cta-desc">
        I'm always open to discussing new opportunities, interesting projects, or just talking tech.
        Feel free to reach out.
      </p>
      <a href="mailto:jensen@larkin.space" class="cta-btn"> Get in Touch </a>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from 'src/composables/useReveal'
const el = useReveal(0.1)
</script>

<style lang="scss" scoped>
.cta-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: $primary;
  margin: 0 0 16px;
}

.cta-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  max-width: 460px;
  margin: 0 auto 28px;
}

.cta-btn {
  display: inline-block;
  padding: 12px 36px;
  border-radius: 30px;
  border: 1px solid $primary;
  color: $primary;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.12);
    box-shadow: 0 0 24px rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
}
</style>
