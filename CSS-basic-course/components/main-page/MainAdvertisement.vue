<template>
  <section id="key-features">
    <h1 class="section-title">Many Good Reasons to Stick Around</h1>
    <ul class="key-feature__list">
      <li class="key-feature" v-for="feature in features" :key="feature">
        <div class="key-feature__image">
          <div v-html="feature.img" />
        </div>
        <p class="key-feature__description">{{ feature.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import svg1 from "~~/assets/svgs/1.svg?raw";
import svg2 from "~~/assets/svgs/2.svg?raw";
import svg3 from "~~/assets/svgs/3.svg?raw";

export default {
  data() {
    return {
      features: [
        {
          description: "3,857,000 Trusting Customers",
          img: svg1,
        },
        {
          description: "99.999% Uptime Guarantee",
          img: svg2,
        },
        {
          description: "Lightning Fast CDN",
          img: svg3,
        },
      ],
    };
  },
};
</script>

<style>
#key-features {
  background-color: var(--highlight-red);
  padding: 1rem;
}

#key-features .section-title {
  color: white;
  margin: 2rem;
}

.key-feature__list {
  list-style: none;
  padding: 0;
}

.key-feature__image {
  background: #ffcede;
  width: 128px;
  height: 128px;
  border: 2px solid #424242;
  border-radius: 50%;
  margin: auto; /* center hirizontly  */
  padding: 1.5rem;
}

.key-feature__description {
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 1.25rem;
}

@media (min-width: 40rem) {
  .key-feature {
    width: 30%;
    max-width: 20rem;
  }

  .key-feature__list {
    margin: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
