import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  isChecked: false,
  classNames: 'remote-device switch',
  initialized: false,
  async init() {
    this._super(...arguments);
    set(this, 'isChecked', await this.isCheckedCall());
    set(this, 'initialized', true);
  },
  async isCheckedCall() {
    let device = await get(this, 'store').adapterFor('remote').invoke(get(this, 'remoteId'), get(this, 'device.name'), 'getState');
    return device.state === 0
  },
  actions: {
    async toggle() {
      let device = await get(this, 'store').adapterFor('remote').invoke(get(this, 'remoteId'), get(this, 'device.name'), 'toggleState');
      set(this, 'isChecked', device.state === 0);
    }
  }

});
