<template>
  <section class="hero bg-gradient-animated">
    <div class="hero-content">
      <!-- <q-avatar size="120px" class="avatar q-mb-lg">
        <img src="~assets/avatar-placeholder.png" alt="Jensen Larkin" />
      </q-avatar> -->
      <div class="greeting text-grey-6">Hello, I'm</div>
      <h1 class="name glow-text">Jensen Larkin</h1>
      <p class="tagline">Software Engineer &middot; United Kingdom</p>
      <p class="hero-sub">
        5+ years building scalable backend systems with Laravel &amp; Vue.js
      </p>
    </div>

    <div class="particles">
      <span v-for="n in 14" :key="n" class="dot" />
    </div>

    <button class="scroll-hint" @click="$emit('scroll-down')" aria-label="Scroll to content">
      <q-icon name="keyboard_arrow_down" size="32px" color="grey-6" />
    </button>
  </section>
</template>

<script setup>
defineEmits(['scroll-down'])
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 1;
  position: relative;
  padding: 0 24px;
}

.avatar {
  border: 2px solid rgba(0, 212, 255, 0.25);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.15);
}

.greeting {
  font-size: 1.1rem;
  margin-bottom: 16px;
  letter-spacing: 0.05em;
}

.name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.1;
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.5);
  margin-top: 16px;
  font-weight: 300;
}

.hero-sub {
  font-size: clamp(0.85rem, 2vw, 1rem);
  color: rgba(255, 255, 255, 0.35);
  margin-top: 12px;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.scroll-hint {
  position: absolute;
  bottom: 40px;
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
  background: none;
  border: none;
  padding: 0;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.dot {
  position: absolute;
  background: rgba(0, 212, 255, 0.4);
  border-radius: 50%;
  width: 3px;
  height: 3px;
  animation: drift ease-in-out infinite;
}

.dot:nth-child(1) {
  top: 12%;
  left: 8%;
  width: 2px;
  height: 2px;
  animation-duration: 9s;
  animation-delay: -2s;
  opacity: 0.3;
}
.dot:nth-child(2) {
  top: 25%;
  left: 85%;
  width: 4px;
  height: 4px;
  animation-duration: 14s;
  animation-delay: -7s;
  opacity: 0.2;
}
.dot:nth-child(3) {
  top: 68%;
  left: 22%;
  width: 3px;
  height: 3px;
  animation-duration: 11s;
  animation-delay: -4s;
  opacity: 0.25;
}
.dot:nth-child(4) {
  top: 45%;
  left: 72%;
  width: 2px;
  height: 2px;
  animation-duration: 16s;
  animation-delay: -1s;
  opacity: 0.35;
}
.dot:nth-child(5) {
  top: 80%;
  left: 55%;
  width: 4px;
  height: 4px;
  animation-duration: 10s;
  animation-delay: -9s;
  opacity: 0.2;
}
.dot:nth-child(6) {
  top: 15%;
  left: 42%;
  width: 3px;
  height: 3px;
  animation-duration: 13s;
  animation-delay: -5s;
  opacity: 0.3;
}
.dot:nth-child(7) {
  top: 55%;
  left: 90%;
  width: 2px;
  height: 2px;
  animation-duration: 18s;
  animation-delay: -3s;
  opacity: 0.2;
}
.dot:nth-child(8) {
  top: 35%;
  left: 15%;
  width: 4px;
  height: 4px;
  animation-duration: 12s;
  animation-delay: -8s;
  opacity: 0.25;
}
.dot:nth-child(9) {
  top: 90%;
  left: 35%;
  width: 2px;
  height: 2px;
  animation-duration: 15s;
  animation-delay: -6s;
  opacity: 0.3;
}
.dot:nth-child(10) {
  top: 8%;
  left: 65%;
  width: 3px;
  height: 3px;
  animation-duration: 11s;
  animation-delay: -2s;
  opacity: 0.2;
}
.dot:nth-child(11) {
  top: 72%;
  left: 78%;
  width: 2px;
  height: 2px;
  animation-duration: 17s;
  animation-delay: -4s;
  opacity: 0.35;
}
.dot:nth-child(12) {
  top: 42%;
  left: 48%;
  width: 3px;
  height: 3px;
  animation-duration: 14s;
  animation-delay: -9s;
  opacity: 0.2;
}
.dot:nth-child(13) {
  top: 60%;
  left: 5%;
  width: 4px;
  height: 4px;
  animation-duration: 10s;
  animation-delay: -1s;
  opacity: 0.25;
}
.dot:nth-child(14) {
  top: 20%;
  left: 30%;
  width: 2px;
  height: 2px;
  animation-duration: 19s;
  animation-delay: -7s;
  opacity: 0.3;
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(12px, -18px);
  }
  50% {
    transform: translate(-8px, -30px);
  }
  75% {
    transform: translate(15px, -12px);
  }
}
</style>
