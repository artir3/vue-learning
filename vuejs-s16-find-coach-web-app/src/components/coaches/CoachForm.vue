<template>
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
      <p v-if="!isTextValid('firstName')">Firstname must not be empty</p>
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
      <p v-if="!isTextValid('lastName')">Lastname must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !isTextValid('description') }">
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
      <p v-if="!isTextValid('description')">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !isNumberValid('rate') }">
      <label for="rate">
        Hourly Rate
      </label>
      <input type="number" name="rate" id="rate" v-model.number="rate" />
      <p v-if="!isNumberValid('rate')">Rate must be grater than zero</p>
    </div>
    <div class="form-control" :class="{ invalid: !isCheckboxValid('areas') }">
      <label>Areas of expertise</label>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
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
      <p v-if="!isCheckboxValid('areas')">
        At least one expertise must be selected
      </p>
    </div>
    <p v-if="!isValid()" class="invalid">
      Please fix the above errors before submit
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
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
      return this.init | (this[input] !== '');
    },
    isNumberValid(input) {
      return this.init | (this[input] & (this[input] > 0));
    },
    isCheckboxValid(input) {
      return this.init | (this[input].length > 0);
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

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

textarea {
  max-width: 100%;
  min-width: 100%;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid div > label,
.invalid p,
p.invalid {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.24);
}
</style>
