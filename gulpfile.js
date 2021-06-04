const { src, series } = require("gulp");
const exec = require('gulp-exec');

const buildMarkUp = (cb) => {
    let options = {
        continueOnError: false, // default = false, true means don't emit error event
        pipeStdout: false, // default = false, true means stdout is written to file.contents
    };
    let reportOptions = {
        err: true, // default = true, false means don't write err
        stderr: true, // default = true, false means don't write stderr
        stdout: true // default = true, false means don't write stdout
    };

    return src('src/**/*.html.js')
        .pipe(exec(file => `node ${file.path}`, options))
        .pipe(exec.reporter(reportOptions))
}

function dummy(cb) {
    console.log('dummy');
    cb();
}

exports.default = series(buildMarkUp, dummy);