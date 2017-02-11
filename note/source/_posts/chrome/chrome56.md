---
title: Chrome 56里的新东西
date: 2017-02-09 20:47:00
tags: [chrome, 前端]
categories: 外文翻译
---
原文:
[https://developers.google.com/web/updates/2017/01/nic56](https://developers.google.com/web/updates/2017/01/nic56)
作者：[Pete LePage](https://developers.google.cn/web/resources/contributors#petelepage) (Pete is a Developer Advocate)

视频：[https://youtu.be/F4DfGVbvRpY](https://youtu.be/F4DfGVbvRpY])

- 支持Web Bluetooth API，Web应用可以和附近的低耗能的蓝牙设备进行通信
- ‘position: sticky’回来了 - 他可以使所创建的元素正常滚动，直到黏到视口(viewport)的顶部。（译者注：代替之前监听scroll或者touchmove事件）
- 对所有用户默认使用HTML5
<!-- more -->
<br/>
我是Pete LePage(原作者), 让我们深入地看看Chrome 56到底给开发者们带来了什么新东西。


## 1. Web Bluetooth API

到目前为止，和蓝牙设备的通信能力只限于本地应用(native app)。在Chrome 56中，你的Web应用也可以借助Web Bluetooth API和附近蓝牙低耗能设备进行安全、私密的通信。

Web Bluetooth API使用的是GATT协议。该协议可以使你的app和灯泡、玩具、心率监控仪、LED显示器等设备通过几行js代码就可以进行通信。Web Bluetooth能够结合物理网络信标，进而更容易发现附近的设备。

Francois有一篇著名的文章发布在‘Updates’上。你可以下载一些简单的demo进行学习，同时你也可以关注Web Bluetooth社区。

## 2. CSS position: sticky;

之前，想要实现头部内容随着页面正常滚动，直到粘在视口顶部这一效果，常常需要监听滚动事件并且在元素上设置relative或fixed属性。由于难以做到操作同步，因此经常会出现视觉上的小跳动。


Chrome现在支持了CSS新特性 - 'position: sticky;' - 一个新的元素定位属性。

如果一个元素的position属性是sticky，那么它相当于开始的属性状态是relative，在元素滚动到一个特定位置时变成fixed状态。

使用时，只需要简单地将元素的position属性值设置为sticky，并设置一个何时进行属性变换临界位置值即可。如下：

```CSS
h3 {
  /* Element will be 'fixed' when it ... */
  position: sticky;
  /* ... is 10px from the top of the viewport */
  top: 10px;
}
```

Paul Kinlan在‘Updates’发布过一篇关于这个属性的文章。

## 3.默认使用HTML5

去年8月，我们宣布我们将默认使用HTML5，进而给用户提供更安全、更高效的体验。这个改变使得Chrome将不使用adobe flash播放器，除非用户在特定的网站需要观看flash内容，最终所有的网站都需要用户授权来在网页上运行flash。

在Chrome 56中，默认使用HTML5已经对所有用户开启，这意味着那些用户之前没有访问过的网站需要引导用户授权来运行flash。

这里有更多关于如何引导用户授权运行flash细节和如何检测你的flash网站的建议。

## 4. 其他

当然，还有很多其他的更新。

WebVR的第一次的测试版本已经可以使用；
WebGL 2.0 API已经可以使用；
支付请求API新增大量新特性。

如果你想持续关注Chrome的最新进展，那就在Twitter上订阅并关注@ChromiumDev吧。你也可以下载Chrome开发大会的视频，进一步关注Chrome小组的正在研究的炫酷新特性。

我是Pete LePage，马上Chrome 57又要发布了。到时候，我还会在这里告诉你们‘Chrome里的新东西’！

## 5. 译者补充：

## 5.1. HTTP 密码和信用卡页面的“Not Secure”警告


## 5.2. 网络蓝牙

[Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/)

## 5.3. CSS position: sticky

## 5.4. Referrer-Policy
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
