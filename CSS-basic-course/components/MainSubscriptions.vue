<template>
  <section id="plans">
    <h1 class="section-title">Chose your plan</h1>
    <div class="plan__list">
      <Subscription v-for="plan in plans" :key="plan.id" :plan="plan" />
    </div>
  </section>
</template>

<script>
import { Subscription } from "~~/components/Subscription";
import { subscriptions } from "~~/data/subscriptions";
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
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>
