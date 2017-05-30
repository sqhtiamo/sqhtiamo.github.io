---
title: HTML5标签
date: 2017-02-09 20:45:00
tags: [tag, html5, 前端]
categories: 外文翻译
---

原文:
[https://www.sitepoint.com/eight-html5-tags-you-might-not-know/?utm_source=frontendfocus&utm_medium=email](https://www.sitepoint.com/eight-html5-tags-you-might-not-know/?utm_source=frontendfocus&utm_medium=email)
## 1.1 \<mark\>

标记和当前用户的相关性，与strong区分，用黄色底标记出来

<!-- more -->
## 1.2 \<small\>

应用于footer、aside远离正文；用于不重要的补充说明

## 1.3 <q> <blockquote>

- q: 短的行内引用
- blockquote: 大段引用

注意和cite进行区分

## 1.4 <ins> <del> <s>

- 结合cite和datetime属性一起使用
- s表示删除之后，还有新的更新代替

## 1.5 <optgroup>

- label 只能看，不能选
- disabled: 里面的options都不可选

## 1.6 <datalist>

结合input作multi－select
```
<label for="favourite-sites">
  Select your favorite website!
</label>
<input
  type="url"
  name="favourite-sites"
  id="favourite-sites"
  list="site-list"/>
<datalist id="site-list">
  <option value="http://www.google.com.au">
  <option value="http://www.reddit.com">
  <option value="http://www.sitepoint.com">
</datalist>
```
