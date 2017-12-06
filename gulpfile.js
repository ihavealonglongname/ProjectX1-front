var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var sourcemaps = require('gulp-sourcemaps');
var fileinclude  = require('gulp-file-include');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var paths = {
    pages: [
        'src/pages/index/*.html',
        'src/pages/view/*.html',
        'src/css/*'
    ]
};

gulp.task("copy-static-res", function () {
    return gulp.src(paths.pages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("dist"));
});

var task_list = new Array('index','view');
task_list.forEach(function(value, index, array) {
    var watchedBrowserify = watchify(browserify({
        basedir: '.',
        debug: true,
        entries: ['src/pages/' + value + '/entry.ts'],
        cache: {},
        packageCache: {}
    }).plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
);
    
watchedBrowserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/pages/' + value + '/entry.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify)
.transform('babelify', {
    presets: ['es2015'],
    extensions: ['.ts']
});
    
    function bundle() {
        return watchedBrowserify
            .bundle()
            .pipe(source(value + '.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest("dist"));
    }
    watchedBrowserify.on("update", bundle);
    gulp.task(value, bundle);
  });

  task_list.push("copy-static-res");

gulp.task("default", task_list, function(){

});

