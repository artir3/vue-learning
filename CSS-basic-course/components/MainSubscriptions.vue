<template>
  <section id="plans">
    <h1 class="section-title">Chose your plan</h1>
    <div class="plan__list">
      <subscription v-for="plan in plans" :key="plan.id" :plan="plan" />
    </div>
  </section>
</template>

<script>
import { subscriptions } from "~~/data/subscriptions";
import Subscription from "./Subscription.vue";

export default {
  components: { Subscription },
  data() {
    return {
      plans: subscriptions,
    };
  },
};
</script>

<style>
#plans {
  margin: 3rem 0;
}

@media (min-width: 35rem) {
  .plan__list {
    margin: auto;
    text-align: center;
  }
}
</style>
