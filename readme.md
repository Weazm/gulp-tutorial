###Gulp使用教程

![just do it](app/images/nike.jpg)
####安装gulp
- 在项目文件夹的根目录下
```
npm install gulp -S (-S参数是保存在package.json, 以后的话就直接用npm install 就可以把所有的依赖包都统一安装)
npm install gulp-util -S

```

####安装gulp插件
 - [gulp插件搜索地址](http://gratimax.github.io/search-gulp-plugins/)
 - 找到你想装的插件按说明安装即可, 通常是(npm install 插件名 -S)

####常用插件
>所有插件都可以直接在gulp插件搜索里面搜索查看使用文档

 - gulp-livereload (即时更新页面, 需要同时安装[chrome插件](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) )
 - gulp-watch (实时监控文件变化)
 - gulp-concat (合并文件)
 - gulp-rename (改名字)
 - gulp-clean (删除文件或文件夹)
 - gulp-minify-css (压缩css)
 - gulp-uglify (压缩js)
 - gulp-jshint (js检测)
 - gulp-imagemin (压缩图片)
 - gulp-stylus (编译stylus)
 - gulp-usemin (根据html block 压缩css, js, html)
 - gulp-coffee (编译coffeescript)
 - gulp-minify-html (压缩Html)
 - gulp-rev (为文件生成随机名字)

####基础API
>详情可以查看[gulp官方文档](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

```
<!-- 创建一个gulp的任务 -->
gulp.task();

<!-- 读取文件 -->
gulp.src()

<!-- 管道执行相应的处理函数 -->
gulp.pipe()

<!-- 保存文件 -->
gulp.dest()
```

####DEMO使用
- 把本项目pull下来
- `npm install`
- 安装[chrome插件](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- `gulp`
- 可以试着编辑html, coffeescript, stylus看看效果
- `gulp build`打包生成dist文件夹


####Copyright
- Author: Bryant Chan
- Email: bryantandk@gmail.com
- Twitter: [@bryantchann](http://twitter.com/bryantchann)
- Company: [Weazm](http://weazm.com)
- Date: 2014.2.19