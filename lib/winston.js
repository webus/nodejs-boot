const winston = require('winston');

const logger = new winston.Logger();
logger.add(winston.transports.Console, { level: 'silly' });

module.exports = logger;
