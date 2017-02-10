---
title: Web Components v1 - 下一代的Web Component
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

也许，你之前听说过Web Components的概念，它较早的一个版本(V0版本)曾在Chrome 33实现过。

Today, thanks to broad collaboration between browser vendors, the next-generation of the Web Components spec - v1 - is gaining wide support. Chrome supports the two major specs that make up Web Components - Shadow DOM and Custom Elements - as of Chrome 53 and Chrome 54 respectively. Safari shipped support for Shadow DOM v1 in Safari 10, and has completed implementation of Custom Elements v1 in WebKit. Firefox is currently developing Shadow DOM and Custom Elements v1, and both Shadow DOM and Custom Elements are on the roadmap for Edge.

To define a new custom element using the v1 implementation, you simply create a new class that extends HTMLElement using ES6 syntax and register it with the browser:
```Java
class MyElement extends HTMLElement {...}
window.customElements.define('my-element', MyElement);
```
The new v1 specs are extremely powerful - we’ve put together tutorials on using Custom Elements v1 and Shadow DOM v1 to help you get started.

## webcomponents.org

The Web Component community is also growing in leaps and bounds. We’re excited to see the launch of an updated webcomponents.org site - the focal point of the web components community - including an integrated catalog for developers to share their elements.

<img src="./webcomponents.gif" alt="webcomponents.org"/>

The webcomponents.org site contains information about the Web Components specs, updates and content from the web components community, and displays documentation for open-source elements and collections of elements built by other developers.

You can get started building your first element using a library like Google’s Polymer, or just use the low-level Web Component API’s directly. Then publish your element on webcomponents.org.

Happy componentizing!
