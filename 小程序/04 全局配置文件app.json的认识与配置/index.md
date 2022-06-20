# pages : 显示页面的路径 这里面配置了需要显示的页面

# window ：主页面或者说当前小程序的一些配置

       * backgroundTextStyle：下拉背景字体、loading 图的样式，仅支持 dark/light
       * navigationBarBackgroundColor：导航栏背景颜色，如"#000000"
       * navigationBarTitleText：导航栏标题文字内容。
       * navigationBarTextStyle：导航栏标题颜色，仅支持 black/white。
       * enablePullDownRefresh：是否开启下拉刷新 
       * backgroundColor：窗口的背景色。

# tabBar -----底部触摸选项

* selectedColor -------- 选中以后的字体颜色

* list:[]--------------- 底部触摸选项列表 （至少需要两个）
    * pagePath ----------- 触摸以后跳转的路径
    * text --------------- 显示的文字
    * iconPath ----------- 未选中时显示的图标的路径
    * selectedIconPath --- 选中时显示的图标的路径

# sitemap.json 请参考请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html