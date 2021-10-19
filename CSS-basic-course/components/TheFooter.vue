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
  padding: 32px;
  margin-top: 48px;
}

.the-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.the-footer__link {
  display: inline-block;
  margin: 0 16px;
}

.the-footer__link a {
  color: white;
  text-decoration: none;
}

.the-footer__link a:active,
.the-footer__link a:hover {
  color: #ccc;
}
</style>
