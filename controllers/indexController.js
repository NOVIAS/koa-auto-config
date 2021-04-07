/**
 * @Author: Novias
 * @Date: 2021/4/7 03:32
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 03:32
 * @Describe
 *
 */
const serviceName = 'indexService';

module.exports = app => ({
    index: async () => {
        app.ctx.body = '首页 Ctrl' + await app.$service[serviceName].getIndex();
    },
    detail: async () => {
        app.ctx.body = '详细页面 Ctrl' + app.$service[serviceName].getDetail();
    }
})
