import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal(threshold = 0.2) {
  const el = ref(null)
  let observer

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold },
    )
    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return el
}
