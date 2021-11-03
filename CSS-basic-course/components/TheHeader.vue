<template>
  <header class="the-header">
    <the-mobile-nav-button
      class="the-mobile-nav__button"
      @switchOnMobile="toggleMobile"
    />
    <a href="/" class="the-header__brand">
      <img src="~~/assets/images/uhost-icon.png" alt="" />
    </a>
    <nav class="the-header__nav">
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
    </nav>
  </header>
  <the-mobile-nav v-if="openMobile" @close="toggleMobile" />
</template>

<script lang="ts">
export default {
  data() {
    return { openMobile: false };
  },
  methods: {
    toggleMobile() {
      this.openMobile = !this.openMobile;
    },
  },
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
  z-index: 1000;

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

.the-mobile-nav__button {
  height: 2rem;
}

@media (min-width: 40rem) {
  .the-mobile-nav__button {
    display: none;
  }

  .the-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    display: flex;
  }

  .the-header__brand img {
    height: 2rem;
  }

  .the-header__nav {
    display: flex;
  }

  .the-header__nav__items {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }

  .the-header__nav__item {
    margin-left: 1rem;
  }

  .the-header__nav__item a {
    text-decoration: none;
    color: #0e4f1f;
    padding: 0.625rem;
  }

  .the-header__nav__item a:active,
  .the-header__nav__item a:hover {
    border: rgb(71, 71, 71) solid 0.5px;
    color: white;
  }

  .the-header__nav__item--cta a {
    color: white;
    background: #ff1b68;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
  }

  .the-header__nav__item--cta a:active,
  .the-header__nav__item--cta a:hover {
    color: #ff1b68;
    background: white;
    border: none;
  }
}
</style>
