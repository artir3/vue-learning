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
  text-align: center;
}

.the-footer__link {
  width: 100%;
  height: 2rem;
  margin: 1rem 0;
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
  .the-footer__link {
    display: inline-block;
    width: max-content;
    margin: 0 1rem;
  }
}
</style>
