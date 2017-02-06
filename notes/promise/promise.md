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

### 4. Promise.all & Promise.race

当参数数组中所有的promise对象都变为resolve的时候，该方法才会返回，新创建的promise则会使用这些promise的值。如果参数中的任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象。

```
var p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(function (results) {
    console.log(results);  // [1, 2, 3]
});
```

数组中的任何一个promise对象如果变为resolve或者reject的话，该函数就会返回，并使用这个promise对象的值进行resolve或者reject。

```
var p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);
Promise.race([p1, p2, p3]).then(function (value) {
    console.log(value);  // 1
});
```
