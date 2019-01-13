
//定时器
function timeData(el) {
  var liveStart = el.data('glivestart'),
      date = new Date(), //当前时间
      countDown = Math.ceil((new Date( liveStart*1000 ) - date)/1000), //剩余时间
      hours = Math.floor(countDown / (60 * 60)),   //剩余小时数
      minutes = Math.floor( (countDown - hours*60*60)/60 ), //剩余分钟数
      seconds = countDown - hours*60*60 - minutes*60; //剩余秒数
  var setInterval_timer = null;
  el.find('.bloc-time.hours').data('init-value',hours);
  el.find('.bloc-time.min').data('init-value',minutes);
  el.find('.bloc-time.sec').data('init-value',seconds);
}

