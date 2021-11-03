<template>
  <footer class="the-footer">
    <nav>
      <ul class="the-footer__links">
        <li class="the-footer__link">
          <a href="#">Support</a>
        </li>
        <li class="the-footer__link">
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style>
.the-footer {
  background: black;
  padding: 2rem;
  margin-top: 2rem;
}

.the-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.the-footer__link {
  margin: 0.5rem 0;
}

.the-footer__link a {
  color: white;
  text-decoration: none;
}

.the-footer__link a:active,
.the-footer__link a:hover {
  color: #ccc;
}

@media (min-width: 40rem) {
  .the-footer__links {
    flex-direction: row;
    justify-content: center;
  }

  .the-footer__link {
    margin: 0 1rem;
  }
}
</style>
