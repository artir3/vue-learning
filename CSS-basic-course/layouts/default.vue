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
  margin: 0px;
}

.btn {
  background-color: #0e4f1f;
  color: white;
  font: inherit;
  border: 1px solid #0e4f1f;
  border-radius: 8px;
  padding: 8px;
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
</style>
