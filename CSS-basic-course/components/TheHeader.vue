<template>
  <header class="the-header">
    <the-mobile-nav />
    <a href="/" class="the-header__brand">
      <img src="~~/assets/images/uhost-icon.png" alt="" />
    </a>
    <the-navigation class="the-header__nav" />
    <!-- <nav class="the-header__nav">
      <ul class="the-header__nav__items">
        <li class="the-header__nav__item">
          <a href="packages">Packages</a>
        </li>
        <li class="the-header__nav__item">
          <a href="customers">Customers</a>
        </li>
        <li class="the-header__nav__item the-header__nav__item--cta">
          <a href="start-hosting">Start Hosting</a>
        </li>
      </ul>
    </nav> -->
  </header>
</template>

<script lang="ts">
import TheMobileNav from "./navigation/TheMobileNav.vue";
import TheNavigation from "./navigation/TheNavigation.vue";

export default {
  components: { TheMobileNav, TheNavigation },
};
</script>

<style>
.the-header {
  background-color: #2ddf5c;
  padding: 0.625rem 1rem;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.the-header__brand {
  display: none;
}

.the-header__nav {
  display: none;
}

@media (min-width: 40rem) {
  .the-mobile-nav__button {
    display: none;
  }

  .the-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    display: inline;
  }

  .the-header__brand img {
    height: 1.75rem;
  }

  .the-header__nav {
    display: inline;
  }
}
</style>
