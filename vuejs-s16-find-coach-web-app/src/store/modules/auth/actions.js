export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(context.state.signupUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();
    console.log(responseData);
    if (response.ok) {
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
      });
    } else {
      throw new Error(responseData.message || 'Failed to authenticate');
    }
  }
};
