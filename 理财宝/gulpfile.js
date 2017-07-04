var gulp = require('gulp');
//给每个文件添加版本号（哈希码）
var rev = require('gulp-rev');
//更新引用
var revReplace = require('gulp-rev-replace');
//按照事先设置好得到规则将多个文件压缩为一个文件
var useref = require('gulp-useref');
//过滤 筛选
var filter = require('gulp-filter');
//压缩JS代码的插件
var uglify = require('gulp-uglify');
//压缩CSS文件的插件
var csso = require('gulp-csso');

gulp.task('default', function(){
    var jsFilter = filter('**/*.js',{restore:true});
    var cssFilter = filter('**/*.css',{restore:true});
    var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
});