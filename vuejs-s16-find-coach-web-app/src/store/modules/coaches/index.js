import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: '123213',
          firstName: 'Bla',
          lastName: 'Bula',
          areas: ['frontend', 'backend', 'career'],
          description: 'Dummy description with dummy life',
          hourlyRate: 30
        },
        {
          id: '4324',
          firstName: 'Donat',
          lastName: 'Bonat',
          areas: ['frontend', 'career'],
          description: 'Dummy description with dummy company and aad life',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  getters,
  actions
};
