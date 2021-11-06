<template>
  <the-backdrop v-if="show" @close="$emit('close')" />
  <teleport to="body">
    <transition name="modal">
      <div v-if="show" class="modal">
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    show: Boolean,
  },
  emits: ["close"],
});
</script>

<style scope>
.modal {
  position: fixed;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  color: black;
  background: linear-gradient(to right, #ccc, white, #ccc);
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.modal-enter-from,
.modal-leave-to {
  position: fixed;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  opacity: 0;
  transform: translateY(-8rem) scale(0.5);
}

.modal-enter-active {
  transition: opacity 200ms ease-out, transform 1s ease-out;
}

.modal-enter-to,
.modal-leave-from {
  position: fixed;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  opacity: 1;
  transform: translateY(0) scale(1);
}

.modal-leave-active {
  transition: opacity 1s ease-in, transform 500ms ease-in;
}
</style>
