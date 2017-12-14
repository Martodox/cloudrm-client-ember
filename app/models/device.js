import DS from 'ember-data';

export default DS.Model.extend({
  actions: DS.attr(),
  name: DS.attr(),
  type: DS.attr(),
  remote: DS.belongsTo('remote')
});
