<template>
  <header class="the-header">
    <div>
      <a href="/" class="the-header__brand">
        <img src="~~/assets/images/uhost-icon.png" alt="" />
      </a>
    </div>
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
</template>

<style>
.the-header {
  background-color: #2ddf5c;
  padding: 0.5rem 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.the-header > div {
  display: inline-block;
  vertical-align: middle;
}

.the-header__brand {
  color: #0e4f1f;
  text-decoration: none;
  padding: 0.625rem;
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-block;
  vertical-align: center;
}

.the-header__brand img {
  height: 1.5rem;
  width: 1.5rem;
}

.the-header__nav {
  display: inline-block;
  text-align: right;
  width: calc(100% - 100px);
  vertical-align: middle;
}

.the-header__nav__items {
  padding: 0;
  margin: 0;
  list-style: none;
}

.the-header__nav__item {
  display: inline-block;
  margin: 0 1rem;
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
</style>
