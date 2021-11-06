<template>
  <div class="background"></div>
  <main class="package__main">
    <section class="package" id="plus">
      <a href="#">
        <h1 class="package__title">Our PLUS Plan</h1>
        <h2 class="package__badge">RECOMENDED</h2>
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
    <div class="clearfix"></div>
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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,900");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

@font-face {
  font-family: "AnonymusPro";
  src: url("assets/fonts/anonymousPro-Regular.tff");
}

@font-face {
  font-family: "AnonymusPro";
  src: url("assets/fonts/anonymousPro-Bold.tff");
  font-weight: 700;
}

@font-face {
  font-family: "AnonymusPro";
  src: url("assets/fonts/anonymousPro-BoldItalic.tff");
}

@font-face {
  font-family: "AnonymusPro";
  src: url("assets/fonts/anonymousPro-Italic.tff");
}

.package__main {
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
}

.background {
  background: url("~~/assets/images/plans-background.jpg") center/ cover;
  filter: grayscale(40%);
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: -1;
}

.package {
  position: relative;
  width: 100%;
  margin: 1rem 0;
  border: 4px solid #0e4f1f;
  border-left: none;
  border-right: none;
  overflow: hidden;
}

.package a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 2rem;
}

.package:hover,
.package:active {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.95);
  border-color: #ff5454;
}

.package__subtitle {
  color: #979797;
  text-shadow: 2px 2px 5px rgb(160, 160, 160);
}

.package__info {
  padding: 1rem;
  border: 1px solid #0e4f1f;
  color: #0e4f1f;
  background: white;

  /**
  "imported fonts"
  To style font we can use many properties e.g.:

  font-size: 1.25rem;
  font-family: "AnonymusPro", "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
  text-decoration: underline wavy blue;

  Short hand of upper properties will be bellow structure:

  font: font-style font-variant font-weight font-size/line=height font-family;
  */
  font: italic small-caps 700 1.2rem/2 "AnonymusPro", "Roboto", sans-serif;

  /** system fonts (menus, status boxes) 
  font: menu;
  font: status-bar;
  */
  /* font: message-box; */
}

.package__badge {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  font-size: 0.75rem;
  color: white;
  background: #ff5454;
  padding: 0.625rem;

  transform: rotateZ(45deg) translateX(4.5rem) translateY(-1rem);
  transform-origin: center;
  width: 15rem;
  text-align: center;
}

.clearfix {
  clear: both;
}

#plus {
  background: rgba(213, 255, 220, 0.95);
}

#free {
  background: rgba(234, 252, 237, 0.95);
}

#free:hover,
#free:active {
  border-left-color: #ff5454;
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

@media (min-width: 40rem) {
  .package__main {
    max-width: 1500px;
  }

  .package {
    position: relative;
    width: 80%;
    margin: 1rem 0;
    border: 4px solid #0e4f1f;
    border-left: none;
  }

  #free {
    float: right;
    text-align: right;
    border-left: 4px solid #0e4f1f;
    border-right: none;
  }
}

@media (min-width: 1500px) {
  .package {
    border: 4px solid #0e4f1f;
  }

  #free {
    border-right: 4px solid #0e4f1f;
  }
}
</style>
