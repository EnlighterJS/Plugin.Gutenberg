// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------


// --------------------------------------------------------------------------
// EnlighterJS Syntax Highlighter - https://enlighterjs.org
// --------------------------------------------------------------------------

const _package = require('./package.json');
const _path = require('path');
const _gulp = require('gulp');
const _log = require('fancy-log');

const _gulp_less = require('gulp-less');
const _gulp_replace = require('gulp-replace');
const _prettyError = require('gulp-prettyerror');
const _concat = require('gulp-concat-util');
const _gulp_cleancss = require('gulp-clean-css');
const _header = require('gulp-header');
const _uglify = require('gulp-uglify');
const _rollup = require('rollup');
const _rollup_babel = require('rollup-plugin-babel');

// license header prepended to builds
const licenseHeader = `/*! EnlighterJS Syntax Highlighter Gutenberg Plugin ${_package.version} | Mozilla Public License 2.0 | https://enlighterjs.org */\n`;

// transpile ES6 and write to tmp file
_gulp.task('es6-transpile', async function(){
    const bundle = await _rollup.rollup({
        input: './src/EnlighterJS.Gutenberg.js',
        plugins: [
            _rollup_babel()
        ]
    });

    // write the bundle to disk
    await bundle.write({
        format: 'iife',
        name: 'EnlighterJS_Gutenberg',
        file: './.tmp/enlighterjs.gutenberg.js'
    });
});

// compress
_gulp.task('library', _gulp.series('es6-transpile', function(){

    // add jquery addon and minify it
    return _gulp.src(['./.tmp/enlighterjs.gutenberg.js'])
        .pipe(_prettyError())

        // minify
        //.pipe(_uglify())
        .pipe(_concat('enlighterjs.gutenberg.min.js'))

        // add license header
        .pipe(_header(licenseHeader))

        // add version string
        .pipe(_gulp_replace(/\[\[VERSION]]/g, _package.version))

        .pipe(_gulp.dest('./dist/'));
}));


// LESS to CSS (Base + Themes)- FULL Bundle
_gulp.task('less', function (){
    // base is always required!
    return _gulp.src(['css/*.less'])
        .pipe(_prettyError())

        .pipe(_gulp_less())
        .pipe(_gulp_cleancss())
        .pipe(_concat('enlighterjs.gutenberg.min.css'))

        // add license header
        .pipe(_header(licenseHeader))

        .pipe(_gulp.dest('dist'));
});

// default task
_gulp.task('default', _gulp.series(['library', 'less']));