console.log('starting mongoose.js');

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/login_reg');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach((file) => {
	if (file.indexOf('js') >= 0) {
		require(models_path + '/' + file);
	}
});