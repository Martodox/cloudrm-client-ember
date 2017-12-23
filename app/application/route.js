import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    error() {
      console.error(...arguments);
    }
  }

});
