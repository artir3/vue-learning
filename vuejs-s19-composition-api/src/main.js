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
import { createRouter, createWebHistory } from 'vue-router';

import App from './07.routing/App.vue';
import AllProducts from './07.routing/pages/AllProducts.vue';
import ProductDetails from './07.routing/pages/ProductDetails.vue';
import AddProduct from './07.routing/pages/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    { path: '/products/:pid', component: ProductDetails },
    { path: '/products/add', component: AddProduct }
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
