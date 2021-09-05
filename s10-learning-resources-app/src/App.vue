<template>
  <Resources :resources="storeResources"></Resources>
</template>

<script>
import Resources from './components/lerning-resources/Resources.vue';

export default {
  components: {
    Resources
  },
  data() {
    return {
      storeResources: [
        {
          id: '1',
          title: 'Test Title no 1',
          description: 'This is descrption to test object 1',
          linl: 'https://vuejs.org'
        },
        {
          id: '2',
          title: 'Test Title no 2',
          description: 'This is descrption to test object 2',
          linl: 'https://google.com'
        }
      ]
    };
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  margin: 0%;
}
</style>
