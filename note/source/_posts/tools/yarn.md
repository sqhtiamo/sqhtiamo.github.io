---
title: Yarn 基本介绍
date: 2017-02-09 10:31:46
tags: [tools, yarn]
categories: 工作拾遗
---

## 1. 什么是yarn？

## 2. yarn有什么好处？

## 3. 性能如何？

yarn的[官网](https://yarnpkg.com/en/compare)给出如下数据（yarn VS npm）：
从warm cache, node_modules, Lockfile/Shrinkwarp 3个参数，8个维度进行比较。
比较结果如下：

<!-- more -->
<img src="./yarn_performance.png" width="800" alt="yarn performace"/>

大部分情况下，yarn远胜于npm。


## 3. 安装

### 3.1 下载安装
mac操作系统：
- 用homebrew安装
```
brew update
brew install yarn
```
- 用curl安装
```
curl -o- -L https://yarnpkg.com/install.sh | bash
```
- 用tarball安装

```
cd /opt
wget https://yarnpkg.com/latest.tar.gz
tar zvxf yarn-*.tar.gz
```

### 3.2 环境变量修改：
```
export PATH="$HOME/.yarn/bin:$PATH
```



## 4. 使用

<img src="/yarn_usage.png" width="800" alt="yarn usage2"/>

## 参考

[官网](https://yarnpkg.com)
