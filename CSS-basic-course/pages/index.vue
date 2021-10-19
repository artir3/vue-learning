<template>
  <main>
    <section id="product-overview">
      <h1>Consectetur id proident.</h1>
    </section>

    <section id="plans">
      <h1 class="section-title">Chose your plan</h1>
      <div>
        <subscription-item v-for="plan in plans" :key="plan.id" :plan="plan" />
      </div>
    </section>
  </main>
</template>

<script>
import SubscriptionItem from "~~/components/SubscriptionItem.vue";
import { subscriptions } from "~~/data/subscriptions";
export default {
  components: { SubscriptionItem },
  data() {
    return {
      plans: subscriptions,
    };
  },
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

p::first-letter {
  color: red;
  font-size: 20px;
}
</style>
