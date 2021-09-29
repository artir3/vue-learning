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
  console.log(responseData);
  if (response.ok) {
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  } else {
    throw new Error(
      responseData.message || 'Failed to authenticate. Check your login data.'
    );
  }
}
