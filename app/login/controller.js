import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  login: inject(),
  username: null,
  password: null,
  actions: {
    async login(e) {
      e.preventDefault();

      get(this, 'store').unloadAll('session');

      let session = await get(this, 'store').createRecord('session', {
        username: get(this, 'username'),
        password: get(this, 'password')
      }).save();

      session.set('password', null);
      get(this, 'login').setToken(get(session, 'token'));
      this.send('goToDashboard');


    }
  }
});
