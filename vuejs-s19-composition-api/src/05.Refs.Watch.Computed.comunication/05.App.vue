<template>
  <section class="container">
    <user-data
      :firstName="firstName"
      :lastName="lastName"
      :says="says"
    ></user-data>
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
        ref="lastNameInput"
      />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './05.UserData.vue';

export default {
  components: { UserData },
  setup() {
    //its called once before "crating" a component
    // const user = reactive({
    //   name: 'Lucifer',
    //   age: 666
    // });
    const age = ref(666);
    const says = ref('Good morning');
    const firstName = ref('Lucifer');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    watch([age, fullName], (newValue, oldValue) => {
      console.log('Old age ' + oldValue[0]);
      console.log('New age ' + newValue[0]);
      console.log('Old full name ' + oldValue[1]);
      console.log('New full name ' + newValue[1]);
    });

    const setNewData = () => {
      firstName.value = 'Diabolo';
      age.value = 32;
      says.value = 'And Die';
    };

    provide('user-age', age);
    return {
      age,
      says,
      setNewData,
      firstName,
      lastName,
      setLastName,
      lastNameInput
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
