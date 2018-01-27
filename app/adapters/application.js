import DS from 'ember-data';
import { computed, get } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  login: inject(),
  host: 'https://api.cloudrm.pro',
  namespace: 'api/v1',
  headers: computed('login.token', function () {
    return {
      'token': get(this, 'login.token')
    }
  })

});
