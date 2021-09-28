export default {
  getCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const userId = rootGetters.userId;
    return getters.getCoaches.some(c => c.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (lastFetch) {
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
    return true;
  }
};
