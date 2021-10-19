<template>
  <main>
    <section class="package" id="plus">
      <a href="#">
        <h1 class="package__title">Our PLUS Plan</h1>
        <h2 class="package__subtitle">
          The most popular choice of our customers.
        </h2>
        <p class="package__info">
          Benefit from increased storage and faster support to ensure that your
          mission-critical data and applications are always available!
        </p>
      </a>
    </section>
    <section class="package" id="free">
      <a href="#">
        <h1 class="package__title">Our FREE Plan</h1>
        <h2 class="package__subtitle">
          An extremely solid start into our hosting world.
        </h2>
        <p class="package__info">Get started immediately at zero cost!</p>
      </a>
    </section>
    <section class="package" id="premium">
      <a href="#">
        <h1 class="package__title">Our PREMIUM Plan</h1>
        <h2 class="package__subtitle">
          All your enterprise needs. Instant support, guaranteed uptime.
        </h2>
        <p class="package__info">
          The best solution for small to large enterprises. Because hosting
          shouldn't be in the way!
        </p>
      </a>
    </section>
  </main>
</template>

<style>
main {
  padding-top: 32px;
}

.package {
  width: 80%;
  margin: 16px 0;
  border: 4px solid #0e4f1f;
}

.package a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 32px;
}

.package:hover,
.package:active {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.95);
  border-color: #ff5454;
}

.package__subtitle {
  color: #979797;
}

.package__info {
  padding: 16px;
  border: 1px solid #0e4f1f;
  font-size: 20px;
  color: #0e4f1f;
  background: white;
}

#plus {
  background: rgba(213, 255, 220, 0.95);
}

#free {
  background: rgba(234, 252, 237, 0.95);
}

#premium {
  background: rgba(13, 79, 31, 0.95);
}

#premium .package__title {
  color: white;
}

#premium .package__subtitle {
  color: #bbb;
}
</style>
