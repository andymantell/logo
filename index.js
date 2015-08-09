var fs = require('fs');
var path = require('path');

module.exports = fs.readFileSync(path.join(__dirname, 'dist/andy-mantell.svg'), { encoding: 'utf-8' });
