export default {
  getRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId.startsWith(coachId));
  },
  hasRequests(_, getters) {
    return getters.getRequests && getters.getRequests.length > 0;
  }
};
