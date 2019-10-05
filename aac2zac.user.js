// ==UserScript==
// @name        AcFun自动换地址 文章版

// @description 正文暂时还可启用旧版样式，不保证后续可用
// @description 旧版评论区风格已失效，无法恢复

// @author      补档PO
// @version     1.3.3

// @include     https://www.acfun.cn/a/ac*

// ==/UserScript==

window.location.href = window.location.href.replace(/^https:\/\/www.\acfun\.cn\/a\//, 'https:\/\/www.\acfun\.cn\/z\/');
