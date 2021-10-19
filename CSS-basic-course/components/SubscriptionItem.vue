<template>
  <article class="plan">
    <h1 v-if="plan.recommended">RECOMENDED</h1>
    <h1>{{ plan.title }}</h1>
    <h2>${{ plan.price }}/month</h2>
    <h3>{{ plan.description }}</h3>
    <ul v-for="spec in plan.specs" :key="spec[0]">
      <li>{{ spec }}</li>
    </ul>
    <div>
      <button>CHOOSE PLAN</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    plan: {
      require: true,
    },
  },
};
</script>

<style>
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 16px;
  margin: 8px;
  display: inline-block;
  width: 30%;
  vertical-align: middle;
}
</style>
