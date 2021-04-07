/**
 * @Author: Novias
 * @Date: 2021/4/7 05:43
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 05:43
 * @Describe
 *
 */

const { Sequelize } = require("sequelize");
const path = require("path");

function initConfig(load) {
  const configs = {};
  load("../configs", (filename, config) => {
    if (config.db) {
      // 将 db 的配置单独导出
      configs.$db = new Sequelize(config.db);
    }
    if (config.middleware) {
      // 根据配置加载中间件
      configs.$middlewares = [];
      config.middleware.forEach((mid) => {
        const midPath = path.resolve(__dirname, "../middlewares", mid);
        configs.$middlewares.push(require(midPath));
      });
    }
  });
  return configs;
}

exports.initConfig = initConfig;
