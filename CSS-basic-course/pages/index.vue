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
  background: url("~~/assets/images/main-page.jpg");
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-top: 43px;
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
