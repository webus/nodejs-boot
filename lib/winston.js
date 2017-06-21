const winston = require('winston');

const logger = new winston.Logger({
    exitOnError: false
});

logger.add(winston.transports.Console, {
    level: process.env.LOG_LEVEL || 'silly',
    timestamp: true,
    handleExceptions: true,
    prettyPrint: true,
    colorize: true
});

logger.add(winston.transports.File, {
    filename: './all.log',
    level: process.env.LOG_LEVEL || 'silly',
    timestamp: true,
    handleExceptions: true
});

module.exports = logger;
