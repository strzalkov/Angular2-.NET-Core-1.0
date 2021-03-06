﻿var gulp = require('gulp');
var merge = require('merge-stream');
var rimraf = require('rimraf');

var paths = {
    nodeModules: './node_modules/',
    clientDeps: './wwwroot/lib/',
    webroot: "./wwwroot/"
};

var clientLibraries = [
    'core-js',
    'zone.js',
    'reflect-metadata',
    'systemjs',
    '@angular',
    'rxjs',
    'es6-shim',
    'angular2-google-maps',
    'ng2-charts',
    'angular2-localstorage',
    'angular2-notifications',
    'ng2-file-upload'
];

gulp.task('copyClientDeps',
    function () {
        var mergeStream = merge();
        for (var i = 0; i < clientLibraries.length; i++) {
            mergeStream.add(gulp.src([paths.nodeModules + clientLibraries[i] + '/**/*', '!' + paths.nodeModules + clientLibraries[i] + '/**/*tsconfig.json'])
                .pipe(gulp.dest(paths.clientDeps + clientLibraries[i])));
        }
        return mergeStream;
    });

gulp.task('cleanClientDeps',
    function (cb) {
        return rimraf(paths.clientDeps, cb);
    });

