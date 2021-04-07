/**
 * @Author: Novias
 * @Date: 2021/4/7 04:04
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 04:04
 * @Describe
 *
 */
function initService(load) {
    const services = {};
    load('../services', (filename, service) => {
        services[filename] = service;
    })
    return services;
}

exports.initService = initService;
