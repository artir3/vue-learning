<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h3>{{ says }}</h3>
    <button @click="setNewData">Update data</button>
  </section>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    //its called once before "crating" a component
    const user = reactive({
      name: 'Lucifer',
      age: 666
    });
    const says = ref('Good morning');

    const setNewData = () => {
      user.name = 'Diabolo';
      user.age = 32;
      says.value = 'And Die';
    };

    return {
      user,
      says,
      setNewData
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
