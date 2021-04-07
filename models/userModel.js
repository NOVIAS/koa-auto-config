/**
 * @Author: Novias
 * @Date: 2021/4/7 06:11
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 06:11
 * @Describe
 *
 */
const {STRING} = require('sequelize');
module.exports = {
    schema: {
        name: STRING(30),
    }
}
