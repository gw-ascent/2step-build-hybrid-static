const { src, series } = require("gulp");
const exec = require('gulp-exec');
const { build: buildHTML } = require('./src/page/index.mkup');

const buildMarkUp = (cb) => {
    var options = {
        continueOnError: false, // default = false, true means don't emit error event
        pipeStdout: false, // default = false, true means stdout is written to file.contents
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err
        stderr: true, // default = true, false means don't write stderr
        stdout: true // default = true, false means don't write stdout
    };

    return src('src/**/*.mkup.js')
        .pipe(exec(file => {
            console.log(file.path);
            console.log(file.path.replace('.js', ''));
            return `node ${file.path.replace('.js', '')}`
        }, options))
        .pipe(exec.reporter(reportOptions))
}

function dummy(cb) {
    console.log('dummy');
    cb();
}

exports.default = series(buildMarkUp, dummy);