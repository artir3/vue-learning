<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ says }}</h3>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName', 'says'],
  setup(props, context) {
    const fullName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    const age = inject('user-age');
    context.emit('dummy-emit', 1);
    return { fullName, age };
  }
  //   computed: {
  //     fullName() {
  //       return this.firstName + ' ' + this.lastName;
  //     }
  //   }
};
</script>
