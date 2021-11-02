<template>
  <main class="signup-page">
    <h1 class="signup-title">Awesome! Let's dive right in!</h1>
    <form action="index.html" class="signup-form">
      <label for="title">Title</label>
      <select id="title">
        <option value="mr">Mr.</option>
        <option value="ms">Ms.</option>
      </select>
      <label for="first-name">First name</label>
      <input type="text" id="first-name" />
      <label for="last-name">Last name</label>
      <input type="text" id="last-name" />
      <label for="email">E-Mail</label>
      <input type="email" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <input type="checkbox" id="agree-terms" required />
      <label for="agree-terms"
        >Agree to
        <a href="#">Terms &amp; Conditions</a>
      </label>
      <button type="submit" class="btn" disabled>Sign Up</button>
    </form>
  </main>
</template>

<style>
.signup-page {
  padding-top: 1.6rem;
}

.signup-title {
  text-align: center;
  font-size: 1.8rem;
  color: #ff5454;
}

.signup-form {
  padding: 1rem;
}

.signup-form label {
  font-weight: bold;
}

.signup-page input,
.signup-page label,
.signup-page select {
  display: block;
  margin-top: 1rem;
  width: 100%;
}

.signup-form input:not([type="checkbox"]),
.signup-form select {
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
  font: inherit;
}

.signup-form input:focus,
.signup-form select:focus {
  outline: none;
  background: #d8f3df;
  border-color: #2ddf5c;
}

/* .signup-form input[type="checkbox"] it works too*/
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  font: inherit;
}

.signup-form input[type="checkbox"] {
  border: 1px solid #ccc;
  background: white;
  width: 1rem;
  height: 1rem;
  /* -webkit-appearance: none; */
  /* -moz-appearance: none; */
  appearance: none;
}

.signup-form input[type="checkbox"]:checked {
  background: #2ddf5c;
  border: #0e4f1f;
}

.signup-form button[type="submit"] {
  display: block;
  margin-top: 1rem;
}

.signup-form input.invalid,
.signup-form select.invalid,
.signup-form :invalid {
  border-color: red !important;
  background: #faacac;
}

@media (min-width: 40rem) {
  .signup-form {
    margin: auto;
    width: 20rem;
  }
}
</style>
