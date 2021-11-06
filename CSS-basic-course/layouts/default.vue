<template>
  <the-header />
  <slot />
  <the-footer />
</template>

<style>
:root {
  --dark-green: #0e4f1f;
  --highlight-red: #ff1b68;
  --tonned-red: #ff5454;
  --highlight-green: #2ddf5c;
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  height: 100%;
  grid-template-rows: 3.5rem auto fit-content(8rem);
  grid-template-areas: "header" "main" "footer";
}

the-footer {
  /* grid-row: 3/4; */
  grid-area: footer;
}

main {
  margin-top: 3.5rem;
  /* min-height: calc(100vh - 3.5rem - 8rem); */
  /* grid-row: 2 / 3; */
  grid-area: main;
}

.btn {
  background-color: var(--dark-green);
  color: white;
  font: inherit;
  border: 1px solid var(--dark-green);
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: white;
  color: var(--dark-green);
}

.btn:focus {
  outline: none;
}

.btn[disabled] {
  cursor: not-allowed;
  border: #a1a1a1;
  background: #ccc;
  color: #a1a1a1;
}
</style>
