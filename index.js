// LOG_LEVELS
// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 };
require('./lib/heartbeat');
module.exports = require('./lib/logger')();
