export default {
  setCoach(context, data) {
    const coach = {
      id: new Date().toISOString(),
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerCoach', coach);
  }
};
