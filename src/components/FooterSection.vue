<template>
  <footer class="footer" role="contentinfo">
    <q-separator color="grey-9" class="q-mb-lg" />
    <p>&copy; {{ new Date().getFullYear() }} Jensen Larkin</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 24px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  p {
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  a {
    color: var(--text-muted);
    text-decoration: none;
    @media (hover: hover) {
      &:hover {
        color: $primary;
      }
    }
    &:focus-visible {
      color: $primary;
    }
  }
}
</style>
