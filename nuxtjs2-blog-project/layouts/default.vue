<template>
  <div>
    <the-header @sidenavToggle="toggleSidenav"></the-header>
    <the-sidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    ></the-sidenav>
    <nuxt />
  </div>
</template>

<script lang="ts">
import TheHeader from "@/components/navigation/TheHeader.vue";
import TheSidenav from "@/components/navigation/TheSidenav.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  },
  methods: {
    toggleSidenav() {
      this.displaySidenav = !this.displaySidenav;
    }
  }
});
</script>

<style>
html {
  font-family: "Open Sans", "sans-serif";
}

body {
  margin: 0px;
}
</style>
