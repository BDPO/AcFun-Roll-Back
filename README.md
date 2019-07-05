AcFun Roll Back Flash
----------

### AcFun 强制回滚 Flash播放器 Ver 1.3
随时可能因官方改动代码而失效，不保证后续可用

同[ACU](https://github.com/BDPO/AcFun-Auto-Change-URL)，[ACH5](https://github.com/BDPO/AcFun-Web-HTML5-Player)项目一样，参考了这个脚本里面的转换URL[代码](https://github.com/zhihaofans/Acfun/blob/master/acfun.tv/acfun2aixifan/acfun2aixifan.js#L29)，感谢原作者[@zhihaofans](https://github.com/zhihaofans)

#### 核心代码
使用document.getElementById()语句，给flash播放器赋予httpsURL<br>
这里非常感谢 [@浮云总是梦](https://github.com/LKI) 全程指导，非常有耐心的帮我改进代码

    document.getElementById("ACFlashPlayer-re").data = "https://cdn.aixifan.com/flash/player-view-homura.swf"

----------

#### 自动跳转版，Chrome/Firefox 请先安装油猴（Tampermonkey/Greasemonkey）

找到想安装的脚本，然后点开Raw查看源代码<br>
这里直接点也可以→[视频版](https://github.com/BDPO/AcFun-Roll-Back-Flash/raw/master/vac2zac.user.js)或[文章版](https://github.com/BDPO/AcFun-Roll-Back-Flash/raw/master/aac2zac.user.js)，油猴会弹出引导安装界面<br>
如果没有自动弹出，点Raw之后可以自行复制完整代码，在油猴添加新脚本导入

----------

#### 收藏夹 手动点击版，请自行复制以下完整代码，并加入收藏
#### acfun主站升级https，目前以下JS跳转仍有效，不保证后续可用

##### 增加一个返回用代码，由www.acfun.cn/**/ac* 跳转回www.acfun.cn/v/ac* （先全部跳回v/ac,文章会再跳a/ac）
    javascript:window.open("http://www.acfun.cn/v/ac" + document.URL.split("/ac")[1]);void(0)


-----------

##### 视频版，由www.acfun.cn/v/ac* 跳转到www.acfun.cn/z/ac* （z/ac页是早期遗留页，不保证永久可用）
    javascript:(function(){window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\//, 'http:\/\/www.\acfun\.cn\/z\/');})();

##### 文章版，由www.acfun.cn/a/ac* 跳转到www.acfun.cn/z/ac* （可跳转回早期旧版文章二级页以及评论区风格）
    javascript:(function(){window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/a\//, 'http:\/\/www.\acfun\.cn\/z\/');})();

