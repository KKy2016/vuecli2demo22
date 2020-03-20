1. vue-cli安装
版本2 
npm i vue-cli -g
vue -V / --version
npm init webpack demo
cd demo
npm run dev
配置已经配置好,而且便于更改

版本4
npm i @vue/cli -g
vue -V / --version
npm create demo
cd demo
npm run serve
默认配置文件,修改需添加vue.config.js

用版本4,安装版本2
npm i -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack demo
cd demo
npm run dev

bulid           项目构建(webpack)相关代码
config          配置目录，包括端口号等。我们初学可以使用默认的。
node_modules	npm 加载的项目依赖模块(提交项目时,不提交此包,但必须提交package.json)
src	            这里是我们要开发的目录，
                基本上要做的事情都在这个目录里。
                里面包含了几个目录及文件：
    assets      放置一些图片，如logo等。
    components  目录里面放了一个组件文件，可以不用。
    App.vue     项目入口文件，我们也可以直接将组件写这里，
                而不使用 components 目录。
    main.js     项目的核心文件。
static	        静态资源目录，如图片、字体等。
test	        初始测试目录，可删除
.xxxx文件	    这些是一些配置文件，包括语法配置，git配置等。
    .gitignore  配置git提交项
index.html	    首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json	项目配置文件(很重要)
README.md	    项目的说明文档，markdown 格式

