/**
 * @Author: Novias
 * @Date: 2021/4/7 06:32
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 06:32
 * @Describe
 *
 */
const serviceName = 'userService';

module.exports = app => ({
    getAllUser: async () => {
        app.ctx.body = '用户首页 Ctrl \n' + await app.$service[serviceName].getAllUser();
    },
    UserDetail: async () => {
        app.ctx.body = '用户详细页面 Ctrl \n' + await app.$service[serviceName].getUserDetail();
    }
})
