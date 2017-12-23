import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Route.extend({
  login: inject(),
  beforeModel() {
    this._super(...arguments);
    get(this, 'login').isLoggedIn();
    return get(this, 'login').restoreSession();
  },
  model() {
    return get(this, 'store').findAll('remote');
  },
  actions: {
    destroySession() {
      get(this, 'login').destroySession();
      this.transitionTo('login');
    },
    error() {
      get(this, 'login').destroySession();
      this.transitionTo('login');
      return console.error(...arguments);
    }
  }
});
