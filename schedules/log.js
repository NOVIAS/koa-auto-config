/**
 * @Author: Novias
 * @Date: 2021/4/7 07:14
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 07:14
 * @Describe 定时日志任务
 *
 */
module.exports = {
  interval: "*/3 * * * * *",
  handler() {
    console.log("定时任务 三秒执行一次 " + new Date());
  },
};
