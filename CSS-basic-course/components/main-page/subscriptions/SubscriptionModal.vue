<template>
  <h1 class="subscription-modal__title">Do you want to continue?</h1>
  <div class="subscription-modal__actions">
    <a href="start-hosting" class="subscription-modal__action">Yes!</a>
    <button
      class="subscription-modal__action subscription-modal__action--negative"
      type="button"
      @click="$emit('close', true)"
    >
      No!
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style>
.subscription-modal__title {
  text-align: center;
  margin: 0 0 1rem 0;
}

.subscription-modal__actions {
  text-align: center;
}

.subscription-modal__action {
  border: 1px solid var(--dark-green);
  background: var(--dark-green);
  text-decoration: none;
  color: white;
  font: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.subscription-modal__action:hover,
.subscription-modal__action:active {
  background: var(--highlight-green);
  border-color: var(--highlight-green);
}

.subscription-modal__action--negative {
  background: red;
  border-color: red;
}

.subscription-modal__action--negative:hover,
.subscription-modal__action--negative:active {
  background: var(--tonned-red);
  border-color: var(--tonned-red);
}
</style>
