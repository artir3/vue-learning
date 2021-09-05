<template>
  <base-card>
    <base-button
      @click="setSelectedTab('resources-list')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <!-- This is special behavour of vue. Vue move that clicks to root level file in the
     custom component. So, that clicks will be added to button element inside the base-button, 
     as we would add that click there  
     -->
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    ResourcesList,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  },
  provide() {
    return {
      resources: this.storeResources
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'resources-list' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  }
};
</script>
