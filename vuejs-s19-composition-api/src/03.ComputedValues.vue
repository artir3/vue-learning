<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h3>{{ says }}</h3>
    <button @click="setNewData">Update data</button>
    <div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        v-model="firstName"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="LastName"
        v-model="lastName"
      />
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed } from 'vue';
export default {
  setup() {
    //its called once before "crating" a component
    const user = reactive({
      name: 'Lucifer',
      age: 666
    });
    const says = ref('Good morning');
    const firstName = ref('');
    const lastName = ref('');

    user.name = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    const setNewData = () => {
      user.name = 'Diabolo';
      user.age = 32;
      says.value = 'And Die';
    };

    return {
      user,
      says,
      setNewData,
      firstName,
      lastName
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
