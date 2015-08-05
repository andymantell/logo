var fs = require('fs');
var path = require('path');

module.exports = fs.readFileSync(path.resolve('dist/andy-mantell.svg'), { encoding: 'utf-8' });
