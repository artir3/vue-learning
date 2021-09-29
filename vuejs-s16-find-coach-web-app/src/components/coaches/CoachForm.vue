<template>
  <base-form>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !isTextValid('firstName') }">
        <label for="fistname">
          Firstname
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model.trim="firstName"
        />
        <p class="errors" v-if="!isTextValid('firstName')">
          Firstname must not be empty
        </p>
      </div>
      <div class="form-control" :class="{ invalid: !isTextValid('lastName') }">
        <label for="lastname">
          Lastname
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model.trim="lastName"
        />
        <p class="errors" v-if="!isTextValid('lastName')">
          Lastname must not be empty
        </p>
      </div>
      <div
        class="form-control"
        :class="{ invalid: !isTextValid('description') }"
      >
        <label for="description">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          v-model.trim="description"
        ></textarea>
        <p class="errors" v-if="!isTextValid('description')">
          Description must not be empty
        </p>
      </div>
      <div class="form-control" :class="{ invalid: !isNumberValid('rate') }">
        <label for="rate">
          Hourly Rate
        </label>
        <input type="number" name="rate" id="rate" v-model.number="rate" />
        <p class="errors" v-if="!isNumberValid('rate')">
          Rate must be grater than zero
        </p>
      </div>
      <div class="form-control" :class="{ invalid: !isCheckboxValid('areas') }">
        <label>Areas of expertise</label>
        <div>
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" id="backend" value="backend" v-model="areas" />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input type="checkbox" id="career" value="career" v-model="areas" />
          <label for="career">Career</label>
        </div>
        <p class="errors" v-if="!isCheckboxValid('areas')">
          At least one expertise must be selected
        </p>
      </div>
      <p class="errors" v-if="!isValid()">
        Please fix the above errors before submit
      </p>
      <base-button>Register</base-button>
    </form>
  </base-form>
</template>

<script>
import {
  checkboxVal,
  numberVal,
  textVal
} from '../../components/validation/Validation.js';

export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
      init: true
    };
  },
  methods: {
    isTextValid(input) {
      return this.init | textVal(this[input]);
    },
    isNumberValid(input) {
      return this.init | numberVal(this[input]);
    },
    isCheckboxValid(input) {
      return this.init | checkboxVal(this[input]);
    },
    isValid() {
      return (
        this.isTextValid('firstName') &
        this.isTextValid('lastName') &
        this.isTextValid('description') &
        this.isNumberValid('rate') &
        this.isCheckboxValid('areas')
      );
    },
    submitForm() {
      this.init = false;

      if (!this.isValid()) {
        return;
      }

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      };
      this.$emit('save-data', formData);
    }
  }
};
</script>
