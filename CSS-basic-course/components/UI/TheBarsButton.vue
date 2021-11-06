<template>
  <button @click="clicked" class="toggle-button">
    <span class="toggle-button__bar"></span>
    <span class="toggle-button__bar"></span>
    <span class="toggle-button__bar"></span>
  </button>
</template>

<script>
export default {
  emits: {
    clicked: Boolean,
  },
  methods: {
    clicked() {
      this.$emit("clicked", true);
    },
  },
};
</script>

<style>
.toggle-button {
  width: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  vertical-align: middle;
}

.toggle-button:focus {
  outline: none;
}

.toggle-button__bar {
  width: 100%;
  height: 0.2rem;
  background: black;
  display: block;
  margin: 0.35rem 0;
}
</style>
