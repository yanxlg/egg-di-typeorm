'use strict';

const mock = require('egg-mock');

describe('test/typeorm-plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/typeorm-plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, typeormPlugin')
      .expect(200);
  });
});
