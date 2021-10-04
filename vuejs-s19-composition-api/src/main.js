import { createApp } from 'vue';

// import App from './05.templateRefs.vue';
// createApp(App).mount('#app');

import BaseSearch from './06.practice.migrateToComponentApi/components/UI/BaseSearch.vue';
import BaseContainer from './06.practice.migrateToComponentApi/components/UI/BaseContainer.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');
