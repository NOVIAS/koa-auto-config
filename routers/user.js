/**
 * @Author: Novias
 * @Date: 2021/4/7 02:36
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:36
 * @Describe
 *
 */
const controllerName = 'userController'

module.exports = {
    'get /': async app => {
        // app.ctx.body = '用户首页'
        app.ctx.body = app.$controller[controllerName].getAllUser()
    },
    'get /detail': async app => {
        // app.ctx.body = '用户详情'
        app.ctx.body = app.$controller[controllerName].UserDetail()
    }
}
