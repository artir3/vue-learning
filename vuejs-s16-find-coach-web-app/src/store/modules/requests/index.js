import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: '2021-09-28T19:36:14.527Z',
          coachId: 'c3_123213',
          userEmail: 'a@a.pl',
          message: 'ad'
        }
      ]
    };
  },
  mutations,
  getters,
  actions
};
