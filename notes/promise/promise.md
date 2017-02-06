# Promise

## 1. Promise.resolve
静态方法Promise.resolve(value) 可以认为是 new Promise() 方法的快捷方式。

```
Promise.resolve(value)

new Promise(function(resolve){
    resolve(value);
});
```


## 2. Thenable

thenable指的是一个具有 .then 方法的对象
