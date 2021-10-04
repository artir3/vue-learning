import { createApp } from 'vue';

// import App from './01.mixins/App.vue';
// import loggerMixing from './01.mixins/mixins/logger.js';
// const app = createApp(App);
// app.mixin(loggerMixing);
// app.mount('#app');

import App from './02.reuse.compositionApi/App.vue';
const app = createApp(App);
app.mount('#app');
