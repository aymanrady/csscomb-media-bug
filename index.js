var Comb = require('csscomb');
var fs = require('fs');

var comb = new Comb({"space-between-declarations": "\n"}, '');

var output = comb.processString(fs.readFileSync('test.css').toString('utf-8'), {
	syntax: 'css'
});