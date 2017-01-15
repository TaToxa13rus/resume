'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
	
var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
		libs: 'build/lib/',
        css: 'build/css/',
		toast: 'build/css/',
		img: 'build/images/',
		data: 'build/data'
    },
    src: { 
        html: 'src/*.html',
        js: 'src/js/app.js',
		libs: 'src/lib/**/*.*',
        style: 'src/css/styles.scss',
		toast: 'src/css/jquery.toastmessage.css',
		img: 'src/images/**/*.*',
		data: 'src/data/feedbacks.json'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
		libs: 'src/lib/**/*.*',
        style: 'src/style/**/*.scss',
		toast: 'src/css/jquery.toastmessage.css',
		img: 'src/images/**/*.*',
		data: 'src/data/feedbacks.json'
    },
    clean: './build'
}

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8080,
    logPrefix: "Frontend_Devil"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});
gulp.task('libs:build', function () {
    gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs)) 
        .pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});
gulp.task('toast:build', function () {
    gulp.src(path.src.toast) 
        .pipe(gulp.dest(path.build.toast))
        .pipe(reload({stream: true}));
});
gulp.task('data:build', function () {
    gulp.src(path.src.data) 
        .pipe(gulp.dest(path.build.data)) 
        .pipe(reload({stream: true})); 
});
gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
	'libs:build',
    'style:build',
	'toast:build',
	'data:build',
	'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
	watch([path.watch.toast], function(event, cb) {
        gulp.start('toast:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
	watch([path.watch.libs], function(event, cb) {
        gulp.start('libs:build');
    });
	watch([path.watch.data], function(event, cb) {
        gulp.start('data:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);