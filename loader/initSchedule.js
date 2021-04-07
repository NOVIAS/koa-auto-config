/**
 * @Author: Novias
 * @Date: 2021/4/7 07:16
 * @Last Modified by:   Novias
 * @Last Modified time: 2021/4/7 07:16
 * @Describe
 *
 */
const schedule = require("node-schedule");

function initSchedule(load) {
  load("../schedules", (filename, scheduleConfig) => {
    schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler);
  });
}

exports.initSchedule = initSchedule;
