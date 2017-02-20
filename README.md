# Angular Webpack Starter

这是一个基于 Angular 1.x + ES6 + Webpack 的最小 AngularJS 自动化开发环境。

**注：由于本人实际项目已几乎不再使用 Angular1.x，加上 Angular2 和 Webpack2 已相继发布，所以本项目停止维护。**

### 预览

![](http://i66.tinypic.com/2pra4hj.png)

## 特点

1. AngularJS + ES6 最佳实践
2. 最小化安装，减少学习成本
3. 使用 Webpack，配置灵活，功能强大，自动化开发和部署
4. 自动加载资源文件，通过 Hash 串进行版本控制，支持使用 **CDN** 加载文件
5. 自动压缩 JS、CSS、HTML 文件，根据浏览器版本自动增加 CSS 前缀等
6. 可以根据需要配置更多自动化功能

## 快速开始

克隆或下载此项目，依次运行如下命令：

```bash
# 克隆此项目（已下载则忽略此步）
$ git clone https://github.com/liamwang/angular-webpack-starter.git my-app

# 切换到你的 APP 目录
$ cd my-app

# 安装 NPM 依赖包
$ npm install

# 启动服务
$ npm start
```

打开浏览器，输入 [http://localhost:8080](http://localhost:8080).

## 打包发布

运行下面命令将自动打包压缩并生成部署文件到 **www** 文件夹：

```bash
$ npm run build
```

将生成的 **www** 文件夹复制到目标服务器即可。

## 在本地浏览发布文件

你也可以使用轻量服务器 **serve** 来检查生成的发布文件。

安装 serve：

```bash
$ npm install -g serve
```

切换到你的 APP/www 目录，运行 serve 服务器：

```bash
$ cd <你的APP目录>/www
$ serve
```

打开浏览器，输入 [http://localhost:3000](http://localhost:3000) 。

## License

[MIT](/LICENSE) license

## 来自作者

若有问题或疑问欢迎 [反馈](https://github.com/liamwang/angular-webpack-starter/issues)！

:heart: [Twitter](https://twitter.com/_liamwang)
