export default {
  async setCoach(context, data) {
    const coach = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const userId = context.rootGetters.userId;
    const response = await fetch(
      `${context.rootState.url}/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );

    // console.log('Response from firebase', response);
    // const responseData = await response.json();
    // console.log('Data returned from firebase', responseData);
    if (response.ok) {
      context.commit('registerCoach', {
        ...data,
        id: userId
      });
    } else {
      throw new Error('Saving coaches in the firebase return error');
    }
  },
  async loadCoaches(context) {
    const response = await fetch(`${context.rootState.url}/coaches.json`);
    const responseData = await response.json();
    if (response.ok) {
      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        coaches.push(coach);
      }
      context.commit('setCoaches', coaches);
    } else {
      throw new Error('Receiving coaches from the firebase return error');
    }
  }
};
