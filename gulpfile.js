//--------------------------------------------------------------------【引入依赖】
var gulp = require('gulp'),
    exec = require('child_process').exec;

//--------------------------------------------------------------------【任务配置】
gulp.task('default', function () {
    // 将你的默认的任务代码放在这
});

gulp.task('server', function () {
    exec('jekyll server', function (err, stdout, stderr) {
        if (err) {
            console.log(err);
            return false;
        }

        exec('fis3 release', function (err, stdout, stderr) {
            if (err) {
                console.log(err);
                return false;
            }

            console.log('jekyll启动成功');
        });
    });
});