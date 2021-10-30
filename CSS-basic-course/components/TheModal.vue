<template>
  <the-backdrop @close="close" />
  <div class="modal">
    <h1 class="modal__title">Do you want to continue?</h1>
    <div class="modal__actions">
      <a href="start-hosting" class="modal__action">Yes!</a>
      <button
        class="modal__action modal__action--negative"
        type="button"
        @click="close"
      >
        No!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style>
.modal {
  position: fixed;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

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
