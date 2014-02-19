
gulp       = require "gulp"
gutil      = require "gulp-util"
concat     = require "gulp-concat"
uglify     = require "gulp-uglify"
usemin     = require "gulp-usemin"
imagemin   = require "gulp-imagemin"
cssmin     = require "gulp-minify-css"
htmlmin    = require "gulp-minify-html"
rev        = require "gulp-rev"
coffee     = require "gulp-coffee"
stylus     = require "gulp-stylus"
watch      = require "gulp-watch"
livereload = require "gulp-livereload"
clean      = require "gulp-clean"


#watch file change
gulp.task "watch", ->
  server = livereload()
  gulp.watch "app/*.html", (evt) ->
    server.changed evt.path
    return

  return


#default
gulp.task "default", ->
  gulp.src("app/coffee/*.coffee")
    .pipe watch()
    .pipe coffee()
    .pipe gulp.dest("app/scripts/")
    .pipe livereload()

  gulp.src("app/stylus/*.styl")
    .pipe watch()
    .pipe stylus()
    .pipe gulp.dest("app/styles/")
    .pipe livereload()
  return


# clean function
gulp.task "clean", ->
  gulp.src("dist/**/*",
    read: false
  ).pipe clean()
  return


# build task
gulp.task "build", ["clean"], ->
  gulp.src("app/images/*")
  .pipe imagemin()
  .pipe gulp.dest("dist/images/")

  gulp.src("app/*.html").pipe(usemin(
    css: [
      cssmin()
      "concat"
      rev()
    ]
    html: [htmlmin(empty: true)]
    js: [
      uglify()
      rev()
    ]
  )).pipe gulp.dest("dist/")
  return

