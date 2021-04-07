/**
 * @Author: Novias
 * @Date: 2021/4/7 03:19
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 03:19
 * @Describe 自动加载路由
 *
 */
const Router = require('koa-router');

function initRouter(load, app) {
    const router = new Router();
    load('../routers', (fileName, routes) => {
        // 对于根目录不做处理
        const prefix = fileName === 'index' ? '' : `/${fileName}`;
        // controller 传入 app
        routes = typeof routes === 'function' ? routes(app) : routes;
        Object.keys(routes).forEach(key => {
            const [method, path] = key.split(' ');
            // 加载路由 路径为文件名 + path
            // FIX: 解决单独 '/' 为 404
            // router[method](prefix + (path === '/' ? '' : path), routes[key]);
            router[method](prefix + (path === '/' ? '' : path),
                // 利用柯里化的思想, 将传递的 ctx 转化为 app.ctx
                async ctx => {
                    app.ctx = ctx;
                    await routes[key](app);
                });
        })
    })
    return router;
}

exports.initRouter = initRouter;
