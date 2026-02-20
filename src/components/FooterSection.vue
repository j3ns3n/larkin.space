<template>
  <footer class="footer" role="contentinfo">
    <q-separator color="grey-9" class="q-mb-lg" />
    <nav aria-label="Footer links">
      <p>
        Built with
        <a href="https://quasar.dev" target="_blank" rel="noopener noreferrer">Quasar</a>
        &middot;
        <a href="mailto:jensen@larkin.space">jensen@larkin.space</a>
      </p>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 24px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    &:hover {
      color: $primary;
    }
  }
}
</style>
