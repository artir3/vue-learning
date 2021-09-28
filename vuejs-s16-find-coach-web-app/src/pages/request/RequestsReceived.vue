<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Receiving contact requests error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <sectionbase-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <base-spinner v-if="isLoading" />
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't receive any requests yet!</h3>
    </sectionbase-card>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseSpinner from '../../components/UI/BaseSpinner.vue';

export default {
  components: { RequestItem, BaseSpinner },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  created() {
    this.loadRequests();
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error =
          error.message || 'Receiving contact requests throws an error';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
