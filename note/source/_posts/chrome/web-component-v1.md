---
title: Web Components v1 - 下一代Web Component规范
date: 2017-02-10 11:19:31
tags: [chrome, web component, 前端]
categories: 外文翻译
---

原文: [https://developers.google.com/web/updates/2017/01/webcomponents-org](https://developers.google.com/web/updates/2017/01/webcomponents-org)
作者：[Taylor Savage](https://developers.google.com/web/resources/contributors#taylorsavage) (Taylor is a PM on the Chrome Team, focusing on Web Components and Polymer.)

## Web Components
你是否曾经想要构建一个可以跨多个项目使用的，跟框架无关的、可供其他开发者使用的js组件？Web Components可能适合你。

<!-- more -->
Web Components是一组web平台的新功能。它可以使你创建自己的HTML元素。每一个HTML元素都有一个自定义标签，如<my-button>，并且拥有所有和原生的内置标签一样的优点。自定义元素也同样拥有属性(properties)、方法(methods)、触发和响应事件(events)，甚至也可以拥有封装好的样式(styles)和DOM树。

<img src="./image00.gif" alt="自定义元素"/>

通过提供一个基于平台的、底层的组件模型，Web Components可以使你搭建和分享一个可复用的任意元素，从定制化的按钮(button)到复杂的视图，如时间选择器(datepicker)。由于Web Components是通过平台的API实现的，它包含了功能强大的、封装好的原语句(primitives)，你甚至可以把这些自定义元素当作标准的DOM元素，在其他的JS类库和框架中使用。

也许，你之前听说过Web Components的概念，它较早的一个版本(V0规范)曾在Chrome 33实现过。

如今，多亏了浏览器厂商们的合作，下一代Web Components － v1规范，已经得到了广泛支持。Chrome已经在53版本和54版本分别支持了，Web Components规范中的2个主要部分 － Shadow Dom和Custom Elements；Safari在10版本中，支持了Shadow DOM v1规范并且完成了在Webkit内核中对Custom Elements v1规范的实现；Firefox对Shadow DOM和Custom Elements v1规范支持正在开发中；Edge也将对Shadow DOM and Custom Elements支持规划到他们的开发roadmap中。

通过v1规范在浏览器中的实现，你只需要借助ES6的语法，创建一个继承(extends)自HTMLElement的新元素(class)，并将它在浏览器中进行注册，你就可以成功地定义了一个新的自定义元素。例如：

```Javascript
class MyElement extends HTMLElement {...}
window.customElements.define('my-element', MyElement);
```
新版本的V1规范已经十分强大。我们整理出了Custom Elements V1和Shadow Dom V1的教程，以便你能更好的上手使用。

## webcomponents.org

Web Component社区也同样的在蓬勃发展。我们兴奋地看到了一个基于web component社区的网站 － webcomponents.org的发布。该网站已经集成了一个目录，可供开发者们贡献自己的自定义元素。

<img src="./webcomponents.gif" alt="webcomponents.org"/>

webcomponents.org包含了Web Components规范, 来自web components社区的更新情况, 开源项目的相关文档和由其他开发者们贡献的自定义元素。

现在，你可以通过类库的方式(如：谷歌的Polymer框架)，或者直接通过底层的Web Component API，开始构建你的第一个自定义元素，然后把它发布到webcomponents.org上。

祝您在组件化之路上，玩的开心！
