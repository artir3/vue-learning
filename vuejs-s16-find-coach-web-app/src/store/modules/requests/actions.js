export default {
  async contactCoach(context, payload) {
    const request = {
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(
      `${context.rootState.serverUrl}/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(request)
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      request.id = responseData.name;
      request.coachId = payload.coachId;
      context.commit('addRequest', request);
    } else {
      throw new Error(
        response.message || 'Saving contact with coach request throws an error'
      );
    }
  },
  async loadRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `${context.rootState.serverUrl}/requests/${coachId}.json`
    );

    if (response.ok) {
      const responseData = await response.json();

      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message
        };
        requests.push(request);
      }
      context.commit('setRequests', requests);
    } else {
      throw new Error(
        response.message || 'Receiving contact requests throws an error'
      );
    }
  }
};
