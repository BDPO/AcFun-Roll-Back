AcFun Roll Back
----------

### 写在前面
以下部分功能已失效，本插件不再维护<br>
1.视频v/ac转z/ac视频详情页，flash播放器失效，评论区暂时还是旧版评论样式<br>
2.文章a/ac转z/ac文章详情页，正文暂时还是旧版页面，旧版评论区风格已失效，无法恢复

### 核心代码
使用document.getElementById()语句，给flash播放器赋予httpsURL<br>
这里非常感谢 [@浮云总是梦](https://github.com/LKI) 全程指导，非常有耐心的帮我改进代码

    document.getElementById("ACFlashPlayer-re").data = "https://cdn.aixifan.com/flash/player-view-homura.swf"

其它详情参阅 [Issues #1](https://github.com/BDPO/AcFun-Roll-Back/issues/1)

----------

### AcFun Roll Back Flash
AcFun 强制回滚 Flash播放器 Ver 1.3 
随时可能因官方改动代码而失效，不保证后续可用

同[ACU](https://github.com/BDPO/AcFun-Auto-Change-URL)，[ACH5](https://github.com/BDPO/AcFun-Web-HTML5-Player)项目一样，参考了这个脚本里面的转换URL[代码](https://github.com/zhihaofans/Acfun/blob/master/acfun.tv/acfun2aixifan/acfun2aixifan.js#L29)，感谢原作者[@zhihaofans](https://github.com/zhihaofans)

----------

### 安装/使用方法
#### 自动跳转版，Chrome/Firefox 请先安装油猴（Tampermonkey/Greasemonkey）

找到想安装的脚本，然后点开Raw查看源代码<br>
这里直接点也可以→[视频版](https://github.com/BDPO/AcFun-Roll-Back/raw/master/vac2zac.user.js)或[文章版](https://github.com/BDPO/AcFun-Roll-Back/raw/master/aac2zac.user.js)，油猴会弹出引导安装界面<br>
如果没有自动弹出，点Raw之后可以自行复制完整代码，在油猴添加新脚本导入

#### 收藏夹 手动点击版，请自行复制以下完整代码，并加入收藏

##### AcFun主站升级https，目前以下JS跳转仍有效，不保证后续可用
##### 增加一个返回用代码，由www.acfun.cn/**/ac* 跳转回www.acfun.cn/v/ac*

    javascript:window.open("https://www.acfun.cn/v/ac" + document.URL.split("/ac")[1]);void(0)

#### 可跳转回早期旧版 z/ac 详情页，不保证永久可用

##### 视频版，由www.acfun.cn/v/ac* 跳转到www.acfun.cn/z/ac*
    javascript:(function(){window.location.href = window.location.href.replace(/^https:\/\/www.\acfun\.cn\/v\//, 'https:\/\/www.\acfun\.cn\/z\/');})();

##### 文章版，由www.acfun.cn/a/ac* 跳转到www.acfun.cn/z/ac*
    javascript:(function(){window.location.href = window.location.href.replace(/^https:\/\/www.\acfun\.cn\/a\//, 'https:\/\/www.\acfun\.cn\/z\/');})();
