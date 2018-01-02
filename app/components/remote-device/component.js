import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  component: computed(function () {
    return `remote-device/${get(this, 'device.type').toLowerCase()}`;
  })
});
