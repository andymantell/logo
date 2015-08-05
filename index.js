var fs = require('fs');
var path = require('path');

module.exports = fs.readFileSync(path.join(path.dirname(require.resolve('logo')), 'dist/andy-mantell.svg'), { encoding: 'utf-8' });
