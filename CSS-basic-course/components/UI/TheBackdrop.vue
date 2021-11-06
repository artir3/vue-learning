<template>
  <div @click="close" class="backdrop"></div>
</template>

<script>
export default {
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
</style>
