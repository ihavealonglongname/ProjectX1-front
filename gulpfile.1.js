var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");

var fileinclude  = require('gulp-file-include');

var paths = {
    pages: [
        'src/pages/index/*.html',
        'src/pages/view/*.html',
        'src/css/*'
    ]
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("dist"));
});


var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/pages/index/entry.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

watchedBrowserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/pages/index/entry.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("task_index", bundle);




var watchedBrowserify2 = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/pages/view/entry.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

watchedBrowserify2 = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/pages/view/entry.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);

function bundle2() {
    return watchedBrowserify2
        .bundle()
        .pipe(source('view.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("task_viewpage", bundle2);

gulp.task("default", ["copy-html","task_index","task_viewpage"], function(){

});


 //watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);