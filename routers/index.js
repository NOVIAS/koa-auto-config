/**
 * @Author: Novias
 * @Date: 2021/4/7 02:35
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:35
 * @Describe
 *
 */
const controllerName = 'indexController';

module.exports = app => ({
    'get /': app.$controller[controllerName].index,
    'get /detail': app.$controller[controllerName].detail
})
