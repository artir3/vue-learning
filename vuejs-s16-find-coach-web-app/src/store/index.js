import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule
  },
  state() {
    return {
      url: 'https://vue-course-udemy-find-coaches-default-rtdb.europe-west1.firebasedatabase.app',
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
