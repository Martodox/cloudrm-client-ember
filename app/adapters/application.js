import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.cloudrm.pro',
  namespace: 'api/v1'
});
