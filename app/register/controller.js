import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  actions: {
    async register(e) {
      e.preventDefault();

      let record = get(this, 'store').createRecord('session/new', {
        username: get(this, 'username'),
        email: get(this, 'email'),
        password: get(this, 'password'),
      });

      try {
        await record.save();
        this.send('transitionToLogin');
        set(this, 'username', null);
        set(this, 'email', null);
        set(this, 'password', null);
      } catch(error) {
        console.log(error);
      }

    }
  }
});
