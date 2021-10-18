<template>
  <header class="the-header">
    <div><a href="/" class="main-header__brand"> uHist </a></div>
    <nav class="main-nav">
      <ul class="main-nav__items">
        <li class="main-nav__item">
          <a href="packages">Packages</a>
        </li>
        <li class="main-nav__item">
          <a href="customers">Customers</a>
        </li>
        <li class="main-nav__item">
          <a href="start-hosting">Start Hosting</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.the-header {
  width: 100%;
  background-color: #2ddf5c;
  padding: 8px 16px;
  width: 100%;
}

.the-header > a {
  text-decoration: none;
}

.the-header > div {
  display: inline-block;
  vertical-align: middle;
}

.main-header__brand {
  color: #0e4f1f;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  font-size: 24px;
}

.main-nav {
  display: inline-block;
  text-align: right;
  width: calc(100% - 100px);
  vertical-align: middle;
}

.main-nav__items {
  padding: 0;
  margin: 0;
  list-style: none;
}

.main-nav__item {
  display: inline-block;
  border: rgb(71, 71, 71) solid 0.5px;
  padding: 10px;
  margin: 0 16px;
}
</style>
