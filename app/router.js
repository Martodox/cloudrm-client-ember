import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' }, function() {
    this.route('remote', { path: '/remote/:remoteId' });
  });
  this.route('login');
  this.route('not-found');
});

export default Router;
