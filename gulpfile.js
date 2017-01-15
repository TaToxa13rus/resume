'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
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
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});
gulp.task('libs:build', function () {
    gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs)) 
        .pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});
gulp.task('toast:build', function () {
    gulp.src(path.src.toast) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.toast)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('data:build', function () {
    gulp.src(path.src.data) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.data)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
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