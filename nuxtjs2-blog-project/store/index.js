import { Store } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const createStore = () => {
  return new Store({
    state() {
      return {
        posts: [],
        token: null
      };
    },
    getters,
    mutations,
    actions
  });
};
export default createStore;
