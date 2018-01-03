import Controller from '@ember/controller';

export default Controller.extend({
  isMenuOpen: false,
  actions: {
    logout() {
      this.send('destroySession');
    },
    toggleNavBar() {
      this.toggleProperty("isMenuOpen")
    }
  }
});
