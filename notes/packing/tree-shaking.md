# tree-shaking


## 1. 什么是tree-shaking?
tree-shaking 由rollup.js提出的feature，使得js（ES2015）在打包的过程中，只需要引入需要用到的js部分，而不需要将整个js模块文件都打包。

## 2. webpack2如何做tree-shaking

两步：

    - 去除所有没有被import引入的export；
    - 在minify的过程中，去除没有被用到的其它代码。


参考：

[http://www.2ality.com/2015/12/webpack-tree-shaking.html](http://www.2ality.com/2015/12/webpack-tree-shaking.html)
