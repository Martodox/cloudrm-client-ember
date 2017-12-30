import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  actions: {
    async invoke() {
      set(this, 'state', null);
      try {
        let response = await get(this, 'store').adapterFor('remote').invoke(...arguments);
        set(this, 'state', response.state);
      } catch(error) {
        set(this, 'state', 'action error');
      }


    }
  }
});
