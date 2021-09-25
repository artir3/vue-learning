export default {
  getCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.getCoaches;
    const userId = rootGetters.userId;
    return coaches.some(c => c.id.startsWith(userId));
  }
};
