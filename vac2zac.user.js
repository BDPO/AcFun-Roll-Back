// ==UserScript==
// @name        AcFun自动换地址 视频版

// @description 视频页面调用flash播放器
// @description 旧版评论区风格，不保证后续可用

// @description 感谢 浮云总是梦 全程指导代码！
// @author      浮云总是梦 补档PO
// @version     1.3.3

// @include     https://www.acfun.cn/*

// ==/UserScript==

/* 使用 if 语句 判断当前网页URL是否在 v/ac 视频详情页
=true 执行 window.location.href.replace 语句 转z/ac
=false 脚本无动作
*/
if (window.location.href.indexOf('www.acfun.cn/v/ac') > 0) {
  window.location.href = window.location.href.replace('www.acfun.cn/v', 'www.acfun.cn/z')
}

// 使用document.getElementById()语句，给"ACFlashPlayer-re"元素下的"data"内容赋予httpsURL，使得flash播放器正常工作
document.getElementById("ACFlashPlayer-re").data = "https://cdn.aixifan.com/flash/player-view-homura.swf"
