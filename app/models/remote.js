import DS from 'ember-data';

export default DS.Model.extend({
  device: DS.hasMany('device')
});
