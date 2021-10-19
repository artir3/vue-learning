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
  background-color: url("~~assets/images/main-page.jpg");
  color: rgb(128, 128, 128);
  width: 100%;
  height: 300px;
  padding: 10px;
}

.section-title {
  color: #2ddf5c;
  text-align: center;
}

.product-overview h1 {
  color: white;
  font-family: "Anton", "sans-serif";
}
</style>
