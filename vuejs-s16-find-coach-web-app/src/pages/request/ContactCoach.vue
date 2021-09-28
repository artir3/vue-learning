<template>
  <div>
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
  </div>
</template>

<script>
// eslint-disable-next-line no-control-regex
const EMAIL_REGEX_RFC_2822 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

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
      return this.init | (this.message !== '');
    },
    isEmailValid() {
      return this.init | EMAIL_REGEX_RFC_2822.test(this.email);
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

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.24);
}

.actions {
  text-align: center;
}
</style>
