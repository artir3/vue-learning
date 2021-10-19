<template>
  <article class="plan" :class="plan.recommended ? 'plan--highlighted' : ''">
    <h1 class="plan__annotation" v-if="plan.recommended">RECOMENDED</h1>
    <h1 class="plan__title">{{ plan.title }}</h1>
    <h2 class="plan__price">${{ plan.price }}/month</h2>
    <h3>{{ plan.description }}</h3>
    <ul class="plan__features">
      <li>
        {{
          plan.specs.workspaces > 1
            ? plan.specs.workspaces + " Workspaces"
            : "1 Workspace"
        }}
      </li>
      <li>{{ plan.specs.traffic }}</li>
      <li>{{ plan.specs.storage }}</li>
      <li>{{ plan.specs.support }}</li>
    </ul>
    <div>
      <button class="btn">CHOOSE PLAN</button>
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

.plan--highlighted {
  background: #19b84c;
  color: white;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.5);
}

.plan__annotation {
  background: white;
  color: #19b84c;
  padding: 8px;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.5);
  border-radius: 8px;
}

.plan__features {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.plan__features li {
  margin: 8px 0;
}

.plan__title {
  color: #0e4f1f;
}

.plan__price {
  color: #858585;
}

.plan--highlighted .plan__price {
  color: #0e4f1f;
}

.plan--highlighted .plan__title {
  color: white;
}

.btn {
  background-color: #0e4f1f;
  color: white;
  font: inherit;
  border: 1px solid #0e4f1f;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: white;
  color: #0e4f1f;
}

.btn:focus {
  outline: none;
}
</style>
