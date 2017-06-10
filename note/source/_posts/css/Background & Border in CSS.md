---
title: CSS规范解析系列 一、 CSS Backgrounds and Borders Module
date: 2017-06-10 20:38:40
tags: [css, background, border, spec, 前端]
categories: 工作拾遗
---
CSS规范解析系列主要根据现行的CSS[规范](https://www.w3.org/Style/CSS/current-work)，对一些CSS规范中的一些细节进行解释和学习，以此提高自己，并希望能够给大家带来帮助。文中的例子，主要来源于自己在当前主流浏览器（chrome、safari、firefox）中的尝试以及对各位大神文章的参考（会明确指出来源）。由于自己才疏学浅，文中不免会出现不少纰漏，请各位不吝赐教。如有问题请联系作者sqhtiamo@163.com。

## 1. 模块介绍
本系列第一章为：CSS Backgrounds and Borders Module，该模块为CSS规范中stable状态下的第一个模块，现在的阶段是CR（在2014年9月就进入该阶段），下一阶段为PR。在大部分现代浏览器中已经实现，并且完成度也是很高的。

该模块([https://www.w3.org/TR/css3-background](https://www.w3.org/TR/css3-background))核心内容有5个部分分别为Backgrounds、Borders、Rounded Corners、Border Images、Miscellaneous Effects。其中Miscellaneous Effects主要包括的内容为：'box-shadow'属性。
<!-- more -->
