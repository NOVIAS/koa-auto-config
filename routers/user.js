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
    'get /': async (app) => {
        await app.$controller[controllerName].getAllUser(app);
    },
    'get /detail': async (app) => {
        await app.$controller[controllerName].UserDetail(app)
    }
}
