import Service from '@ember/service';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({
  store: inject(),
  token: null,
  getToken() {
    return window.localStorage.getItem('token');
  },
  setToken(token) {
    set(this, 'token', token);
    window.localStorage.setItem('token', token);
  },
  isLoggedIn() {
    if (this.getToken()) {
      set(this, 'token', this.getToken());
      return true
    }

    throw new Error('not logged in')

  },
  destroySession() {
    set(this, 'token', null);
    window.localStorage.removeItem('token');
  },
  restoreSession() {
    get(this, 'store').queryRecord('session', {});
  }
});
