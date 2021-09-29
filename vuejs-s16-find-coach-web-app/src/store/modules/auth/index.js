import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  state() {
    return {
      signupUrl:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChUiaF6fjVB9YgrdOTdpNtgdvgogFhGCg',
      userId: null,
      token: null,
      tokenExpiration: null
    };
  },
  getters,
  mutations,
  actions
};
