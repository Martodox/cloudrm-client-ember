import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  username: attr(),
  password: attr(),
  token: attr(),
  createdAt: attr(),
  updatedAt: attr(),
  email: attr()
});
