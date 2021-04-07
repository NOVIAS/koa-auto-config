/**
 * @Author: Novias
 * @Date: 2021/4/7 03:40
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 03:40
 * @Describe
 *
 */

function initController(load, app) {
    const controllers = {};
    load('../controllers', (filename, controller) => {
        controller = typeof controller === 'function' ? controller(app) : controller;
        controllers[filename] = controller;
    })
    return controllers;
}

exports.initController = initController;
