import { createApp } from 'vue';

// Simple projects
// import App from './05.templateRefs.vue';
// createApp(App).mount('#app');

// for 06.practice.migrateToComponentApi
// import BaseSearch from './06.practice.migrateToComponentApi/components/UI/BaseSearch.vue';
// import BaseContainer from './06.practice.migrateToComponentApi/components/UI/BaseContainer.vue';
// import App from './06.practice.migrateToComponentApi/App.vue';
// const app = createApp(App);
// app.component('base-search', BaseSearch);
// app.component('base-container', BaseContainer);
// app.mount('#app');

// for 07.routing
import App from './07.routing/App.vue';
import { router } from './07.routing/router.js';

const app = createApp(App);

app.use(router);
app.mount('#app');
