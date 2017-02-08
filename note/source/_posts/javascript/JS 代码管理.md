---
title: JS 代码管理
date: 2017-02-08 13:42:00
tags: [javascript, 最佳实践]
categories: 工作拾遗
---
## 1. 编写「可读」代码的实践
[淘宝 Fed 叶斋 http://taobaofed.org/blog/2017/01/05/writing-readable-code/](http://taobaofed.org/blog/2017/01/05/writing-readable-code/)

### 1.1 变量命名

- 驼峰
- 使用名词来命名对象，使用动词来命名函数

对于集合来说：也可以加上 List（数组）或 Map（对象）后缀来显式表示出来

对于函数来说：建议动＋宾＋补 如：fetchUserInfoAsync

<!-- more -->

```
monkey.eat(banana);  // the money eats a banana
const apple = pick(tree);  // pick an apple from the tree
```

#### 1.1.1 命名的上下文

变量的命名应与上下文相契合，同一个变量，在不同的上下文中，命名可以不同。

不同上下文更应根据实际情况而定。


#### 1.1.2 严格遵循一种命名规范的收益

特定上下文中的特定含义只有一种命名方式，也就是说，只有一个名字。

也就是说，命名规范后，对于一种场景，只有一个函数命名方式。

（是否需要整理一个常用动词、名词list？）

### 1.2 分支结构

大体认同，但是实践的时候，需要考虑很多特殊情况。

#### 1.2.1 不好的做法：在分支中 return

#### 1.2.2 不好的做法：多个条件复合

#### 1.2.3 不好的做法：使用分支改变环境

### 1.3 函数

#### 1.3.1 函数只做一件事情

比如：
```
async function fetchUserInfo(id) {
  const isSingle = typeof idList === 'string';
  const idList = isSingle ? [id] : id;
  const result = await request.post('/api/userInfo', {idList});
  return isSingle ? result[0] : result;
}

// 可以这样调用
const userList = await fetchUserInfo(['1011', '1013']);
// 也可以这样调用
const user = await fetchUserInfo('1017');
```

可以修改为：
```
async function fetchMultipleUser(idList) {
  return await request.post('/api/users/', {idList});
}

async function fetchSingleUser(id) {
  return await fetchMultipleUser([id])[0];
}
```

那么，如何界定某个函数做的是不是一件事情？我的经验是这样：如果一个函数的参数仅仅包含输入数据（交给函数处理的数据），而没有混杂或暗含有指令（以某种约定的方式告诉函数该怎么处理数据），那么函数所做的应当就是一件事情。比如说，改良前的 fetchUserInfo 函数的参数是「多个用户的ID数组或单个用户的ID」，这个「或」字其实就暗含了某种指令。


#### 1.3.2 函数应适当地处理异常

注：
- 1. 有时候需要防御氏编程，保证系统正确，但是有时候同时也应该暴露其他接口的隐患
- 2. 尝试用try throw代替短路分支的方式

#### 1.3.3 控制函数的副作用

使用纯函数

#### 1.3.4 非侵入性地改造函数

### 1.4 类的结构

#### 1.4.1 避免滥用成员函数
