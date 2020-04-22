'use strict';

/**
 * egg-typeorm-plugin default config
 * @member Config#typeorm
 * @property {String} SOME_KEY - some description
 */
exports.typeorm = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: '',
  autoLoadEntities: true,
  synchronize: true,
};
