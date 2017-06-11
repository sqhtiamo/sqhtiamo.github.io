---
title: CSS标准详解系列 一、 CSS Backgrounds and Borders Module
date: 2017-06-10 20:38:40
tags: [css, background, border, spec, 前端]
categories: 工作拾遗
---
CSS标准详解系列主要根据现行的CSS[规范](https://www.w3.org/Style/CSS/current-work)，对一些CSS标准中的一些细节进行解释和学习，以此提高自己，并希望能够给大家带来帮助。文中的例子，主要来源于自己在当前主流浏览器（chrome、safari、firefox）中的尝试以及对各位大神文章的参考（会明确指出来源）。由于自己才疏学浅，文中不免会出现不少纰漏，请各位不吝赐教。如有问题请联系作者sqhtiamo@163.com。

## 1. 介绍
本系列第一章为：CSS Backgrounds and Borders Module，该模块为CSS标准中stable状态下的第一个模块，现在的阶段是CR（在2014年9月就进入该阶段），下一阶段为PR。在大部分现代浏览器中已经实现，并且完成度也是很高的。

该模块([https://www.w3.org/TR/css3-background](https://www.w3.org/TR/css3-background))核心内容有5个部分分别为Backgrounds、Borders、Rounded Corners、Border Images、Miscellaneous Effects。其中Miscellaneous Effects主要包括的内容为：'box-shadow'属性。
<!-- more -->

## 2. Backgrounds
每个盒子的背景层为全透明（默认值）、被一种颜色(a color?)填充、或被一张或多张图片填充。


## 3. Borders
有关borders的部分较为简单，大部分属性（除了border-image）都是在CSS1时，就进入了标准。

Border可以是一个预定义的样式，也可以是一张图片。当border为一个预定义样式时，可以定义的属性有'border-style', 'border-color', 'border-width'；当border为图片时，详见第5部分。

### 3.1 Line Colors
### 3.2 Line Patterns:
### 3.3 Line Thickness
### 3.4 Border Shorthand Properties


## 4. Rounded Corners圆角
### 4.1 Curve Radii
这部分内容其实指的就是'border-radius'属性，支持border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius，当然同样支持border-radius这样的缩略写法（其值从左上顺时针匹配）。其值可以为具体的数值，也可以为百分比。其中，为具体数值时会有一个'大值问题'，即如果数值设的值大于width或height的50％时，表现和设短边的raius为50％时一致，具体请见张鑫旭的文章：[秋月何时了，CSS3 border-radius知多少?](http://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/)

例子：
```
border-radius: 2em 1em 4em / 0.5em 3em;
```
等效为
```
border-top-left-radius:     2em 0.5em;
border-top-right-radius:    1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius:  1em 3em;
```
### 4.2 Corner Shaping
### 4.3 Corner Clipping
### 4.4 Color and Style Transitions
### 4.5 Overlapping Curves
### 4.6 Effect on Tables

## 5. Border Images

## 6. Miscellaneous Effects
这部分主要讲的是box-shadow属性。之前也涉及了'box-decoration-break'属性，现在也被移到了CSS Fragmentation Module标准中去。
6.1. Drop Shadows
