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

Francois有一篇著名的文章发布在‘Updates’上, be sure to check out some of neat demos to go along with it. And be sure to check out the Web Bluetooth Community.

## 2. CSS position: sticky;

Previously, building content headers that scrolled normally until sticking to the top of the viewport required listening to scroll events and switching an element’s position from relative to fixed at a specified threshold. It was difficult to synchronize, and often results in small visual jumps.

Chrome now supports CSS position: sticky;, a new way to position elements.

An element that is position sticky, starts relative; but becomes fixed, after the element reaches a certain scroll position.

Simply set position: sticky, and set a threshold for it to become sticky.

```CSS
h3 {
  /* Element will be 'fixed' when it ... */
  position: sticky;
  /* ... is 10px from the top of the viewport */
  top: 10px;
}
```

Paul Kinlan has an Updates post about it.

## 3. HTML5 By Default

Last August, we announced that we’d be moving to HTML5 By Default to offer a safer, more power-efficient experience. This change disables Adobe Flash Player unless there’s a user indication that they want Flash content on specific sites, and eventually all websites will require the user’s permission to run Flash.

In Chrome 56, HTML5 By Default has been enabled for all users, which means they will be prompted to run Flash on sites they've never visited.

More details about how and when users will be prompted, and recommendations on how to test your Flash sites.

## 4. And more

And of course, there’s plenty more.

WebVR is available as an Origin Trial.
The WebGL 2.0 API is now available.
And the Payment Request API has a variety of new features.
If you want to stay up to date with Chrome and know what’s coming, be sure to subscribe, follow @ChromiumDev on Twitter and be sure to check out the videos from the Chrome Dev Summit for a deeper dive into some of the awesome things the Chrome team is working on.



我是Pete LePage，马上Chrome 57又要发布了。我将还会在这里告诉你们‘Chrome里的新东西’！

## 5. 译者补充：

## 5.1. HTTP 密码和信用卡页面的“Not Secure”警告


## 5.2. 网络蓝牙

[Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/)

## 5.3. CSS position: sticky

## 5.4. Referrer-Policy
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
