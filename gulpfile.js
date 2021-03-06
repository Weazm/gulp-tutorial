// Generated by CoffeeScript 1.7.0
(function() {
  var clean, coffee, concat, cssmin, gulp, gutil, htmlmin, imagemin, jshint, livereload, rev, stylish, stylus, uglify, usemin, watch;

  gulp = require("gulp");

  gutil = require("gulp-util");

  concat = require("gulp-concat");

  uglify = require("gulp-uglify");

  usemin = require("gulp-usemin");

  imagemin = require("gulp-imagemin");

  cssmin = require("gulp-minify-css");

  htmlmin = require("gulp-minify-html");

  rev = require("gulp-rev");

  coffee = require("gulp-coffee");

  stylus = require("gulp-stylus");

  watch = require("gulp-watch");

  livereload = require("gulp-livereload");

  clean = require("gulp-clean");

  jshint = require("gulp-jshint");

  stylish = require("jshint-stylish");

  gulp.task("watch", function() {
    var server;
    server = livereload();
    gulp.watch("app/*.html", function(evt) {
      server.changed(evt.path);
    });
  });

  gulp.task("default", function() {
    gulp.src("app/coffee/*.coffee").pipe(watch()).pipe(coffee()).pipe(gulp.dest("app/scripts/")).pipe(livereload());
    gulp.src("app/stylus/*.styl").pipe(watch()).pipe(stylus()).pipe(gulp.dest("app/styles/")).pipe(livereload());
  });

  gulp.task("clean", function() {
    gulp.src("dist/**/*", {
      read: false
    }).pipe(clean());
  });

  gulp.task("jshint", function() {
    return gulp.src("app/scripts/*.js").pipe(jshint()).pipe(jshint.reporter(stylish));
  });

  gulp.task("build", ["clean", "jshint"], function() {
    gulp.src("app/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images/"));
    gulp.src("app/*.html").pipe(usemin({
      css: [cssmin(), "concat", rev()],
      html: [
        htmlmin({
          empty: true
        })
      ],
      js: [uglify(), rev()]
    })).pipe(gulp.dest("dist/"));
  });

}).call(this);
