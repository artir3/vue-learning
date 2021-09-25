export default {
  setCoach(context, data) {
    const coach = {
      id: context.rootGetters.userId + '_' + new Date().getTime(),
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerCoach', coach);
  }
};
