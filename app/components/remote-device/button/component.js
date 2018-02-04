import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject } from '@ember/service';
import { later } from '@ember/runloop';


export default Component.extend({
  store: inject(),
  throttle: 1000,
  classNames: 'remote-device button',
  initialized: false,
  disabled: computed.not('initialized'),
  async init() {
    this._super(...arguments);
    set(this, 'throttle', await this.getThrottle());
    set(this, 'initialized', true);
  },
  async getThrottle() {
    let device = await get(this, 'store').adapterFor('remote').invoke(get(this, 'remoteId'), get(this, 'device.name'), 'getState');
    return device.state
  },
  actions: {
    async touch() {
      set(this, 'initialized', false);
      await get(this, 'store').adapterFor('remote').invoke(get(this, 'remoteId'), get(this, 'device.name'), 'touch');
      later(() => {
        set(this, 'initialized', true);
      }, get(this, 'throttle'))

    }
  }

});
