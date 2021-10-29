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
import MainSubscriptions from "~~/components/MainSubscriptions.vue";
import MainAdvertisement from "~~/components/MainAdvertisement.vue";

export default {
  components: { MainSubscriptions, MainAdvertisement },
};
</script>

<style>
#product-overview {
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url("~~/assets/images/main-page.jpg") left 10% bottom 20% / cover no-repeat
      border-box,
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
  height: 30vh;
  padding: 0.625rem;
  margin-top: 43px;
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
}
</style>
