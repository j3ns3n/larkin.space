<template>
  <q-page class="error-page bg-gradient-animated">
    <div class="error-content">
      <h1 class="error-code glow-text">404</h1>
      <p class="error-message">{{ message }}</p>
      <a href="/" class="home-btn">Take Me Home</a>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const messages = [
  "Looks like this route wasn't in the requirements.",
  'This page was deployed on a Friday.',
  'This page is on my backlog, I promise.',
  'git blame says this is your fault.',
  'Have you tried clearing your cache?',
  'This page works on my machine.',
  '404: Page not found',
  'This page is stuck in review.',
  'Error: task failed successfully.',
  'Undefined is not a page.',
  'I swear this worked in staging.',
  "The page you're looking for is in another castle.",
  'SELECT * FROM pages WHERE url = this; -- 0 rows returned.',
  "It's not a bug, it's a feature.",
]

// Stable during SSG/hydration. A joke is chosen after mount so the
// pre-rendered 404.html does not mismatch, and no-JS visitors still
// see a real message.
const message = ref('404: Page not found')

onMounted(() => {
  message.value = messages[Math.floor(Math.random() * messages.length)]
  document.title = 'Page Not Found - Jensen Larkin'

  let robots = document.querySelector('meta[name="robots"]')
  if (robots) {
    robots.setAttribute('content', 'noindex, nofollow')
  } else {
    robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)
  }

  document.querySelector('link[rel="canonical"]')?.remove()
})
</script>

<style lang="scss" scoped>
.error-page {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  z-index: 9999;
}

.error-code {
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1;
}

.error-message {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--text-muted);
  font-weight: 300;
  margin: 16px 0 40px;
}

.home-btn {
  display: inline-block;
  padding: 12px 36px;
  border-radius: 30px;
  border: 1px solid $primary;
  color: $primary;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background: rgba(0, 212, 255, 0.12);
      box-shadow: 0 0 24px rgba(0, 212, 255, 0.2);
      transform: translateY(-2px);
    }
  }

  &:focus-visible {
    background: rgba(0, 212, 255, 0.12);
    box-shadow: 0 0 24px rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
}
</style>
