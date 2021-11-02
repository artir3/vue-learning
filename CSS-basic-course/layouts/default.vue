<template>
  <the-header />
  <slot />
  <the-footer />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  margin-top: 3.5rem;
  min-height: calc(100vh - 3.5rem - 8rem);
}

.btn {
  background-color: #0e4f1f;
  color: white;
  font: inherit;
  border: 1px solid #0e4f1f;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: white;
  color: #0e4f1f;
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
