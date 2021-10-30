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
    switchOnMobile: Boolean,
  },
  methods: {
    clicked() {
      this.$emit("switchOnMobile");
    },
  },
};
</script>

<style>
.toggle-button {
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
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
  margin: 0.6rem 0;
}
</style>
