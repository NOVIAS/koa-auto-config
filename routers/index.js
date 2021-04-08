/**
 * @Author: Novias
 * @Date: 2021/4/7 02:35
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:35
 * @Describe
 *
 */
const controllerName = 'indexController';

module.exports = {
    'get /': async (app) => {
        await app.$controller[controllerName].getIndex(app);
    },
    'get /detail': async (app) => {
        await app.$controller[controllerName].getDetail(app);
    },
}
