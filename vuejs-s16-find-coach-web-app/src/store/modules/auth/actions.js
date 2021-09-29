export default {
  async login(context, payload) {
    await callFirebase(
      context,
      context.state.loginUrl,
      payload.email,
      payload.password
    );
  },
  async signup(context, payload) {
    await callFirebase(
      context,
      context.state.signupUrl,
      payload.email,
      payload.password
    );
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      });
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};

async function callFirebase(context, url, email, password) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  const responseData = await response.json();
  if (response.ok) {
    const data = {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    };
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    context.commit('setUser', data);
  } else {
    throw new Error(
      responseData.message || 'Failed to authenticate. Check your login data.'
    );
  }
}
