'use strict';
var bulk = require('bulk-require');

module.exports = angular.module('app.controllers', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js','**/*.js']);