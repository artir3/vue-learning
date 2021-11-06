<template>
  <main>
    <section id="product-overview">
      <h1>Consectetur id proident.</h1>
    </section>
    <MainSubscriptions />
    <MainAdvertisement />
  </main>
</template>

<script>
import MainSubscriptions from "~~/components/main-page/MainSubscriptions.vue";
import MainAdvertisement from "~~/components/main-page/MainAdvertisement.vue";

export default {
  components: { MainSubscriptions, MainAdvertisement },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Anton");

#product-overview {
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("~~/assets/images/main-page.jpg") center / cover no-repeat border-box,
    #f18484;
  /* background-image: url("~~/assets/images/main-page.jpg");
  background-position: left 10% bottom 20%;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-clip: border-box;*/
  /* background-image: linear-gradient(30deg, #f18484 40%, #ff0606, #f18484); */
  /* background-image: radial-gradient(
    circle 300px at 15% 60%,
    #f35 20%,
    #43e 100%
  ); */
  width: 100vw;
  height: 33vh;
  padding: 0.625rem;
  /* border: 5px dashed red; */
  position: relative;
}

.section-title {
  color: #2ddf5c;
  text-align: center;
}

#product-overview h1 {
  color: white;
  font-family: "Anton", "sans-serif";
  position: absolute;
  bottom: 5%;
  left: 3%;
  font-size: 1.6rem;
}

@media (min-width: 40rem) {
  #product-overview {
    height: 40vh;
    background-position: 50% 25%;
  }

  #product-overview h1 {
    font-size: 3rem;
  }
}

@media (min-width: 60rem) and (min-height: 40rem) {
  #product-overview {
    height: 50vh;
    background-position: 50% 25%;
  }

  #product-overview h1 {
    font-size: 5rem;
  }
}
</style>
