import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  async model({remoteId}) {
    this._super(...arguments);

    const remote = await get(this, 'store').peekRecord('remote', remoteId);

    return get(remote, 'actions');
  }
});
