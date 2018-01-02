import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('remote-device/switch', 'Integration | Component | remote device/switch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{remote-device/switch}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#remote-device/switch}}
      template block text
    {{/remote-device/switch}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
