import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { next } from '@ember/runloop';

export default Controller.extend({
  show: true,
  actions: {
    async invoke() {
      set(this, 'state', null);
      try {
        let response = await get(this, 'store').adapterFor('remote').invoke(...arguments);
        set(this, 'state', response.state);
      } catch(error) {
        set(this, 'state', 'action error');
      }


    },
    refresh() {
      this.set('show', false);
      next(() => {
        this.set('show', true);
      });

    }
  }
});
