/**
 * @Author: Novias
 * @Date: 2021/4/7 02:38
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:38
 * @Describe
 *
 */
const koa = require("koa");
const {loader} = require("./loader.js");
const {initRouter} = require("./initRouter");
const {initController} = require("./initController");
const {initService} = require("./initServer.js");
const {initConfig} = require("./initConfig");
const {initModel} = require('./initModel');
const {initSchedule} = require("./initSchedule.js");

class AutoWorker {
    constructor() {
        // 执行顺序必须注意
        this.$app = new koa();
        this.$config = initConfig(loader);
        this.$model = initModel(loader, this);
        this.$service = initService(loader);
        this.$controller = initController(loader);
        this.$router = initRouter(loader, this);
    }

    middlewareLoad() {
        // 执行中间件加载
        if (this.$config.$middlewares !== 0) {
            this.$config.$middlewares.forEach(mid => {
                this.$app.use(mid)
            })
        }
    }

    start(port) {
        // 执行中间件, 开启定时任务
        this.middlewareLoad();
        // 通过 use 注入 ctx
        this.$app.use(this.$router.routes());
        initSchedule(loader)
        this.$app.listen(port, (err) => {
            if (err) throw err;
            console.log(`服务器启动成功: 启动地址: http://localhost:${port}`);
        });
    }
}

module.exports = AutoWorker;
