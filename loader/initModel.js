/**
 * @Author: Novias
 * @Date: 2021/4/7 06:12
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 06:12
 * @Describe
 *
 */

function initModel(load, app) {
    const models = {}
    if (!app.$config.$db) throw new Error('数据库初始化错误, 请检查数据库配置');
    load('../models', (filename, {schema}) => {
        models[filename] = app.$config.$db.define(filename, schema);
    })
    app.$config.$db.sync().then();
    return models;
}

exports.initModel = initModel;
