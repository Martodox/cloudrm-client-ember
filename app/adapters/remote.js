import ApplicationAdapter from './application';
import { inject } from '@ember/service';
import { get } from '@ember/object';
import $ from 'jquery';

export default ApplicationAdapter.extend({
  login: inject(),
  async invoke(remoteId, deviceName, action) {

    const url = `${this.buildURL()}/remotes/invoke`;

    try {
      let response = await $.ajax(url, {
        method: 'POST',
        headers: {
          'token': get(this, 'login.token')
        },
        data: {
          remoteId,
          deviceName,
          action
        }
      });

      return response;

    } catch (error) {
      console.error(error);
    }


  }
});
