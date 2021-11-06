<template>
  <the-bars-button class="the-mobile-nav__button" @clicked="toggleMobile">
  </the-bars-button>
  <teleport to="body">
    <div v-if="openMobile">
      <the-backdrop @close="toggleMobile" />
      <the-navigation
        class="the-mobile-nav__navigation"
        :home="true"
        @click="toggleMobile"
      />
    </div>
  </teleport>
</template>

<script lang="ts">
import TheBackdrop from "../UI/TheBackdrop.vue";
import TheBarsButton from "../UI/TheBarsButton.vue";
import TheNavigation from "./TheNavigation.vue";

export default {
  components: { TheBackdrop, TheBarsButton, TheNavigation },
  data() {
    return { openMobile: false };
  },
  methods: {
    toggleMobile() {
      this.openMobile = !this.openMobile;
    },
  },
};
</script>

<style>
.the-mobile-nav__button {
  height: 2rem;
}

.the-mobile-nav__navigation {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;

  background: white;
  width: 80%;
  height: 100vh;
}
</style>
