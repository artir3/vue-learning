import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule
  },
  state() {
    return {
      serverUrl:
        'https://vue-course-udemy-find-coaches-default-rtdb.europe-west1.firebasedatabase.app'
    };
  }
});

export default store;
