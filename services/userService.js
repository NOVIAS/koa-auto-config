/**
 * @Author: Novias
 * @Date: 2021/4/7 06:37
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 06:37
 * @Describe
 *
 */
module.exports = {
    async getAllUser(app) {
        return 'getIndex 获取' + await app.$model.user.findAll();
    },
    async getUserDetail() {
        return 'getDetail 获取';
    }
}
