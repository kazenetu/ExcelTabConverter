var gulp = require('gulp');
var typescript = require('gulp-typescript');

// オプションを渡して事前にプロジェクトを作成
var tsProject = typescript.createProject({
  target: "ES5",
  sortOutput: true
});

//ビルド
gulp.task('build',function(){
	 gulp.src(['./src/app.ts'])
		.pipe(typescript(tsProject))
    .pipe(gulp.dest('./'));
});

//ビルド
gulp.task('default',['build']);
