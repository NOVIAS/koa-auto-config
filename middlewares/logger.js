/**
 * @Author: Novias
 * @Date: 2021/4/7 06:51
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 06:51
 * @Describe
 *
 */
module.exports = async (ctx, next) => {
  console.time(`访问${ctx.path}  ${ctx.method}  ${ctx.status}`);
  await next();
  console.timeEnd(`访问${ctx.path}  ${ctx.method}  ${ctx.status}`);
};
