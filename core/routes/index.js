'use strict';

var path = require('path');
var express = require('express');

/**
* Add /assets to static routes
*/
global.app.use('/assets', express.static(path.join(global.userPath, 'assets')));

/**
* Add /help as documentation route
*/
global.app.use('/solution', express.static(path.join(global.userPath, 'solution')));
