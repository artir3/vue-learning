<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js';

export default {
  components: {
    UserAlert
  },
  setup() {
    const alertTitle = ref('Delete this user?!');
    const alert = useAlert();

    return {
      alertIsVisible: alert[0],
      showAlert: alert[1],
      hideAlert: alert[2],
      alertTitle
    };
  }
};
</script>
