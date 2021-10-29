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
.plan__list {
  width: 80vw;
  margin: auto;
  text-align: center;
}
</style>
