/**
 * @Author: Novias
 * @Date: 2021/4/7 02:38
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 02:38
 * @Describe    用于读取目录
 *
 */
const fs = require('fs');
const path = require('path');

function loader(dir, cb) {
    const url = path.resolve(__dirname, dir);
    const files = fs.readdirSync(url);
    files.forEach(filename => {
        filename = filename.replace('.js', '');
        // 加载文件
        const file = require(path.join(url + '/' + filename));
        cb(filename, file);
    })
}

exports.loader = loader;
