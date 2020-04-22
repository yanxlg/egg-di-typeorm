'use strict';

const createConnection = require('typeorm').createConnection;
const getRepository = require('typeorm').getRepository;
const path = require('path');

const defaultConfig = {
  entities: [
    path.join(path.resolve(), '/app/entities/*.ts'),
    path.join(path.resolve(), '/app/entities/*.js'),
  ],
};

module.exports = app => {
  app.beforeStart(async () => {
    const config = app.config.typeorm;
    await createConnection(Object.assign({}, defaultConfig, config)).then(connection => {
      const { entityMetadatas } = connection;
      app.context.entity = app.context.entity || {};
      app.entity = app.entity || {};
      entityMetadatas.forEach(entityMetadata => {
        app.entity[entityMetadata.name] = getRepository(entityMetadata.target);
        app.context.entity[entityMetadata.name] = getRepository(entityMetadata.target);
      });
    });
  });
};
