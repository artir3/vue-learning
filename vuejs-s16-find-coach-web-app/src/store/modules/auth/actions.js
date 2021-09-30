import { signupUrl, loginUrl } from '../../../../.env';

let timer;

export default {
  async login(context, payload) {
    await callFirebase(context, loginUrl, payload.email, payload.password);
  },
  async signup(context, payload) {
    await callFirebase(context, signupUrl, payload.email, payload.password);
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 10000) {
      return;
    }
    setTimer(context, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      });
    }
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null
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
      userId: responseData.localId
    };

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('tokenExpiration', expirationDate);

    setTimer(context, expiresIn);

    context.commit('setUser', data);
  } else {
    throw new Error(
      responseData.message || 'Failed to authenticate. Check your login data.'
    );
  }
}

function setTimer(context, expiresIn) {
  timer = setTimeout(function() {
    context.dispatch('autoLogout');
  }, expiresIn);
}
