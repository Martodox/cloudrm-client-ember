import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  login: inject(),
  beforeModel() {
    this._super(...arguments);
    try {
      get(this, 'login').isLoggedIn();
      this.transitionTo('dashboard');
      return false
    } catch (e) {
      return true;
    }

  },
  actions: {
    goToDashboard() {
      this.transitionTo('dashboard');
    }
  }
});
