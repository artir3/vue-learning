<template>
  <section id="key-features">
    <h1 class="section-title">Many Good Reasons to Stick Around</h1>
    <ul class="key-feature__list">
      <li class="key-feature" v-for="feature in features" :key="feature">
        <div class="key-feature__image"></div>
        <p class="key-feature__description">{{ feature }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        "3,857,000 Trusting Customers",
        "99.999% Uptime Guarantee",
        "Lightning Fast CDN",
      ],
    };
  },
};
</script>

<style>
#key-features {
  background-color: #ff1b68;
  margin-top: 80px;
  padding: 16px;
}
#key-features .section-title {
  color: white;
  margin: 32px;
}

.key-feature__list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.key-feature {
  display: inline-block;
  width: 30%;
  vertical-align: top;
}

.key-feature__image {
  background: #ffcede;
  width: 128px;
  height: 128px;
  border: 2px solid #424242;
  border-radius: 50%;
  margin: auto; /* center hirizontly  */
}

.key-feature__description {
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 20px;
}
</style>
