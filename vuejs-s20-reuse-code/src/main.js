import { createApp } from 'vue';

// 01.mixins
// import App from './01.mixins/App.vue';
// import loggerMixing from './01.mixins/mixins/logger.js';
// const app = createApp(App);
// app.mixin(loggerMixing);
// app.mount('#app');

// 02.reuse.compositionApi
// import App from './02.reuse.compositionApi/App.vue';
// const app = createApp(App);
// app.mount('#app');

// 03.project
import BaseSearch from './03.project/components/UI/BaseSearch.vue';
import BaseContainer from './03.project/components/UI/BaseContainer.vue';
import App from './03.project/App.vue';

const app = createApp(App);

app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');
