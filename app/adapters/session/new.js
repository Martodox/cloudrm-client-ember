import ApplicationAdapter from '../application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    return this.buildURL() + '/session/new';
  }
});
