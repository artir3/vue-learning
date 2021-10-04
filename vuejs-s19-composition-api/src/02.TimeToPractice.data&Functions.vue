<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="data.visible">{{ data.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toogleVisible">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';

export default {
  // setup() {
  //   // Commented code is the first way to do this
  //   // const courseGoal = 'Finish this couse';
  //   // const isVisible = ref(false);
  //   const data = reactive({
  //     goal: 'Finish this couse',
  //     visible: false
  //   });

  //   const toogleVisible = () => {
  //     // isVisible.value = !isVisible.value;
  //     data.visible = !data.visible;
  //   };

  //   return {
  //     // courseGoal: data.goal,
  //     toogleVisible,
  //     // isVisible: data.visible this is not working in the rective components
  //     data
  //   };
  // }
  data() {
    return {
      data: {
        goal: 'Finish this couse',
        visible: false
      }
    };
  },
  methods: {
    toogleVisible() {
      // isVisible.value = !isVisible.value;
      this.data.visible = !this.data.visible;
    }
  }
};
</script>
<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
