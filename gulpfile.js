const { src, dest, series } = require("gulp");
const { build: buildHTML } = require('./src/page/index.mkup');

function buildMarkUp(cb) {
    return buildHTML;
}

function dummy(cb) {
    console.log('dummy');
    return Promise.resolve('adsf');
}

exports.default = series(buildMarkUp, dummy);