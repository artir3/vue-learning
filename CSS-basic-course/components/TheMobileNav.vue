<template>
  <the-backdrop @close="close" />
  <nav class="the-mobile-nav" @click="close">
    <ul class="the-mobile-nav__items">
      <li class="the-mobile-nav__item">
        <a href="/">Home</a>
      </li>
      <li class="the-mobile-nav__item">
        <a href="/packages">Packages</a>
      </li>
      <li class="the-mobile-nav__item">
        <a href="/customers">Customers</a>
      </li>
      <li class="the-mobile-nav__item the-mobile-nav__item--cta">
        <a href="/start-hosting">Start Hosting</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  emits: ["close"],
  methods: {
    close(): void {
      this.$emit("close");
    },
  },
};
</script>

<style>
.the-mobile-nav {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;

  background: white;
  width: 80%;
  height: 100vh;
}

.the-mobile-nav__items {
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.the-mobile-nav__item {
  margin: 1rem;
}

.the-mobile-nav__item a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #0e4f1f;
  font-size: 1.5rem;
  font-weight: bold;
}

.the-mobile-nav__item--cta a {
  color: white;
  background: #ff1b68;
  border-radius: 0.5rem;
  border: none;
}

.the-mobile-nav__item--cta a:active,
.the-mobile-nav__item--cta a:hover {
  color: #ff1b68;
  background: white;
  border: none;
}
</style>
