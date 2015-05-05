"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var browserify = require("browserify");
var babelify = require("babelify");
//var uglify = require("gulp-uglify");
var reactify = require("reactify");
var serve = require("gulp-serve");
var watch = require("gulp-watch");

function js() {
  browserify("./src/index.jsx", { debug: true })
    .transform(babelify)
    .transform(reactify)
    .bundle()
    .on("error", gutil.log.bind(gutil, "Browserify Error"))
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    //.pipe(uglify())
    .pipe(sourcemaps.write("./")) // writes .map file
    .pipe(gulp.dest("./dist"));
}

gulp.task("default", ["js"]);

gulp.task("serve", ["js"], serve({
  port: 8000,
  root: ["public", "dist"]
}));

gulp.task("watch", ["serve"], function() {
  watch("src/**/*", js);
});

gulp.task("js", js);
