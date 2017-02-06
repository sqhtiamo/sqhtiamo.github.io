# Promise

参考：[http://liubin.org/promises-book](http://liubin.org/promises-book)

## 1. Promise.resolve & Promise.reject
静态方法Promise.resolve(value) & Promise.reject(error)可以认为是new Promise()方法的快捷方式。

```
Promise.resolve(value)

new Promise(function(resolve){
    resolve(value);
});
```

```
Promise.reject(new Error("出错了"))
new Promise(function(resolve,reject){
    reject(new Error("出错了"));
});
```

## 2. Thenable

thenable指的是一个具有.then方法的对象，利用thenable对象原来具有的then方法，将thenable对象转换为promise对象。

```
var promise = Promise.resolve($.ajax('/json/comment.json')); // => promise对象

promise.then(function(value){
   console.log(value);
});
```

## 3. Promise#catch
Promise#catch只是promise.then(undefined, onRejected); 方法的一个别名而已

### 3.1 每次调用then都会返回一个新创建的promise对象
[Promise Anti-patterns](http://taoofcode.net/promise-anti-patterns/)

### 3.2 使用promise.then(onFulfilled, onRejected)，在onFulfilled中发生异常的话，在onRejected中是捕获不到这个异常的。

### 3.3

1. 同一个then里，resolve和reject函数不会同时进行。只执行最先出现的。
2. 一个错误被catch或then中的reject，则不会继续传递下去

```
var getInfo = function (info) {
    return new Promise(function (resolve, reject) {
        reject(111)
        setTimeout(function () {
            console.log(resolve)
            resolve(info)
        }, 3000)
    })
}


getInfo('test').then(function (info) {
    console.log(info)
}, null).catch(function (err) {
    console.log(2)
    console.log(err)
})
```
