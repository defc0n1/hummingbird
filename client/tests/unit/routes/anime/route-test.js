import { moduleFor, test } from 'ember-qunit';

moduleFor('route:anime', 'Unit | Route | anime', {
  // Specify the other units that are required for this test.
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
