<template>
  <base-card>
    <base-form>
      <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !isEmailValid() }">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" />
        </div>
        <div class="form-control" :class="{ invalid: !isPasswordValid() }">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </div>
        <p v-if="!isValid()">
          Please enter a valid email and password (must be at least 6 characters
          long).
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-form>
  </base-card>
</template>

<script>
import { emailVal, textVal } from '../../components/validation/Validation.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      init: true,
      mode: 'login'
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ? 'Signup instead' : 'Login instead';
    }
  },
  methods: {
    isEmailValid() {
      return this.init | emailVal(this.email);
    },
    isPasswordValid() {
      return this.init | textVal(this.password, 6);
    },
    isValid() {
      return this.isEmailValid() && this.isPasswordValid();
    },
    submitForm() {
      this.init = false;
      if (!this.isValid()) {
        return;
      }
    },
    switchAuthMode() {
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}
</style>
