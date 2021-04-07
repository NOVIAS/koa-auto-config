/**
 * @Author: Novias
 * @Date: 2021/4/7 02:26
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:26
 * @Describe
 *
 */
const AutoWorker = require('./loader/index.js');
const autoWorker = new AutoWorker();

autoWorker.start(3000);
