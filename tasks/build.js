import gulp from 'gulp';
// 处理包的顺序问题：
import gulpSequence from 'gulp-sequence';

// 数组中的任务一定在其他的后边，而serve一定在browser后面
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));