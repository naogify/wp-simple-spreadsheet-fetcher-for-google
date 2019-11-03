let gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cleanCss = require('gulp-clean-css');
let runSequence = require('run-sequence');
let jsmin = require('gulp-jsmin');

gulp.task('sass', function () {
    return gulp.src(['./blocks/src/**/*.scss'])
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.sass({
            errLogToConsole: true,
            outputStyle: 'compressed',
            includePaths: [
                './src/scss'
            ]
        }))
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest('./blocks/build/'));
});

// Transpile and Compile Sass and Bundle it.
gulp.task('js', function () {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('./'));
});

// watch
gulp.task('watch', function () {
    gulp.watch('./blocks/src/**/*.js', ['js']);
    gulp.watch('./blocks/src/**/*.scss', ['sass']);
    // gulp.watch('src/**/*.scss', ['sass']);
});

// Build
gulp.task('build', function (){
    gulp.task('js');
    gulp.task('sass');
});

// Default Tasks
gulp.task('default', gulp.task('watch'));

// copy build ////////////////////////////////////////////////
gulp.task('dist', function () {
    return gulp.src(
        [
            './**/*.php',
            './**/*.txt',
            './**/*.css',
            './**/*.scss',
            './**/*.bat',
            './**/*.rb',
            './**/*.eot',
            './**/*.svg',
            './**/*.ttf',
            './**/*.woff',
            './**/*.woff2',
            './**/*.otf',
            './**/*.less',
            './**/*.png',
            './inc/**',
            "!./compile.bat",
            "!./config.rb",
            "!./tests/**",
            "!./build/**",
            "!./src/**",
            "!./bin/**",
            "!./editor-css/**",
            "!./node_modules/**"
        ],
        {base: './'}
    )
        .pipe(gulp.dest('build/vk-blocks')); // distディレクトリに出力
});
