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
      <button @click="showModal" class="btn">CHOOSE PLAN</button>
      <the-modal :show="modalIsVisible" @close="hideModal">
        <subscription-modal @close="hideModal" />
      </the-modal>
    </div>
  </article>
</template>

<script>
import SubscriptionModal from "./SubscriptionModal.vue";
import TheModal from "./TheModal.vue";

export default {
  components: { SubscriptionModal, TheModal },
  props: {
    plan: {
      require: true,
    },
  },
  data() {
    return {
      modalIsVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalIsVisible = true;
    },
    hideModal() {
      this.modalIsVisible = false;
    },
  },
};
</script>

<style>
.plan {
  background: #d5ffdc;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
}

.plan--highlighted {
  background: #19b84c;
  color: white;
}

.plan__annotation {
  background: white;
  color: #19b84c;
  padding: 0.5rem;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.5);
  border-radius: 8px;
}

.plan__features {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.plan__features li {
  margin: 0.5rem 0;
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

@media (min-width: 40rem) {
  .plan {
    width: 30%;
    min-width: 13rem;
    max-width: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 28rem;

    margin: 0.5rem;
    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.5);
  }

  .plan--highlighted {
    height: 31rem;
    z-index: 50;
  }
}
</style>
