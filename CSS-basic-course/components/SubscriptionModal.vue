<template>
  <h1 class="modal__title">Do you want to continue?</h1>
  <div class="modal__actions">
    <a href="start-hosting" class="modal__action">Yes!</a>
    <button
      class="modal__action modal__action--negative"
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
.modal__title {
  text-align: center;
  margin: 0 0 1rem 0;
}

.modal__actions {
  text-align: center;
}

.modal__action {
  border: 1px solid #0e4f1f;
  background: #0e4f1f;
  text-decoration: none;
  color: white;
  font: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.modal__action:hover,
.modal__action:active {
  background: #2ddf5c;
  border-color: #2ddf5c;
}

.modal__action--negative {
  background: red;
  border-color: red;
}

.modal__action--negative:hover,
.modal__action--negative:active {
  background: #ff5454;
  border-color: #ff5454;
}
</style>
