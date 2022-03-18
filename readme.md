# electron-go-demo

> electron中运行1个Go开发的websocket Server例子。
> Go项目在[websocket-go](https://github.com/meta-liam/websocket-go)中生成Mac运行文件(build/mac/main),跑了一个webSocket Server。
> 服务资源放在www文件夹。

## bug

1. 网络问题时，关闭防火墙就好了。
2. 打包时候，固定相同版本。

## 快速开始

翻墙时候安装！！

``` shell
npm uninstall electron
npm install electron@17.1.1 -g

npm i

npm start
```

## 打包

目录的

```shell
npm run app:dist
```

加密的:

```shell
npm run app:asar
```

测试中，打asar包时，运行 shell有问题，待解决（已经解决）。
