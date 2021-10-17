<template>
  <div>
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
html {
  font-family: "Open Sans", "sans-serif";
}

body {
  margin: 0px;
}
</style>
