var gulp = require('gulp'),
	sass = require('gulp-sass');
	autoprefixer = require('gulp-autoprefixer');

gulp.task("sass", function(){
	gulp.src("./pc/sass/h5.scss")
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true, //是否美化属性值 默认：true 
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(gulp.dest("./pc/css"));
});

gulp.task("watch", function(){
	
	gulp.run("sass");
	gulp.watch(["./pc/sass/*.scss","./pc/sass/*/*.scss"],function(){
		gulp.run("sass");
	})
});

gulp.task("default", function(){
	
	gulp.run("watch");
});
