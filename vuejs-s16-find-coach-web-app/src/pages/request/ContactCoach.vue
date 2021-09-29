<template>
  <base-form>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !isEmailValid() }">
        <label for="email"> Email </label>
        <input type="email" name="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control" :class="{ invalid: !isMessageValid() }">
        <label for="message"> Message </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          v-model.trim="message"
        />
      </div>
      <p class="errors" v-if="!isValid()">
        Please enter a valid email and non-empty message.
      </p>
      <div class="actions">
        <base-button>Send Message</base-button>
      </div>
    </form>
  </base-form>
</template>

<script>
import { emailVal, textVal } from '../../components/validation/Validation.js';
export default {
  data() {
    return {
      email: '',
      message: '',
      init: true
    };
  },
  methods: {
    isMessageValid() {
      return this.init | textVal(this.message);
    },
    isEmailValid() {
      return this.init | emailVal(this.email);
    },
    isValid() {
      return this.isMessageValid() & this.isEmailValid();
    },
    submitForm() {
      this.init = false;
      if (!this.isValid()) {
        return;
      }
      const data = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      };
      this.$store.dispatch('requests/contactCoach', data);
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.actions {
  text-align: center;
}
</style>
