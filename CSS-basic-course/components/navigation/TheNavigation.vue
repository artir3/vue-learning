<template>
  <nav class="nav">
    <ul class="nav__items">
      <li v-if="home" class="nav__item">
        <a href="/">Home</a>
      </li>
      <li class="nav__item">
        <a href="/packages">Packages</a>
      </li>
      <li class="nav__item">
        <a href="/customers">Customers</a>
      </li>
      <li class="nav__item nav__item--cta">
        <a href="/start-hosting">Start Hosting</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    home: Boolean,
  },
};
</script>

<style scoped>
.nav__items {
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav__item a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: var(--dark-green);
  font-size: 1.5rem;
  font-weight: bold;
}

.nav__item a:active,
.nav__item a:hover {
  border: rgb(71, 71, 71) solid 0.5px;
  border-radius: 0.5rem;
}

@media (min-width: 40rem) {
  .nav__items {
    flex-direction: row;
  }

  .nav__item {
    margin: 0 0 0 1rem;
  }

  .nav__item a {
    font-size: 1rem;
  }

  .nav__item a:active,
  .nav__item a:hover {
    color: white;
  }
}

.nav__item--cta a {
  color: white;
  background: var(--highlight-red);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
}

.nav__item--cta a:active,
.nav__item--cta a:hover {
  color: var(--highlight-red);
  background: white;
  border: none;
}

.nav__item--cta {
  animation: wiggle 300ms 3s 8 none;
}

@keyframes wiggle {
  0% {
    transform: rotateZ(0);
  }

  50% {
    transform: rotateZ(-15deg);
  }

  100% {
    transform: rotateZ(15deg);
  }
  /* from {
    transform: rotateZ(-10deg);
  }

  to {
    transform: rotateZ(10deg);
  } */
}
</style>
