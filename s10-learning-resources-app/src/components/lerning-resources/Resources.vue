<template>
  <ul>
    <resource
      v-for="res in resources"
      :key="res.id"
      :link="res.link"
      :description="res.description"
      :title="res.title"
    ></resource>
  </ul>
</template>

<script>
import Resource from './Resource.vue';
export default {
  components: { Resource },
  props: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
