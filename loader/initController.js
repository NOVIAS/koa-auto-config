/**
 * @Author: Novias
 * @Date: 2021/4/7 03:40
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 03:40
 * @Describe
 *
 */

function initController(load) {
    const controllers = {};
    load('../controllers', (filename, controller) => {
        // 注释掉 是为了通过 router 将 app 实例传入
        // controller = typeof controller === 'function' ? controller(app) : controller;
        controllers[filename] = controller;
    })
    return controllers;
}

exports.initController = initController;
