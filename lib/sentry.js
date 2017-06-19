const winston = require('winston');
const logger = require('./graylog');
const Sentry = require('winston-sentry');

logger.add(Sentry, {
    level: 'warn',
    dsn: process.env.SENTRY_DSN,
    timestamp: true,
    handleExceptions: true,
    patchGlobal: true,
    tags: {},
    extra: {}
});

module.exports = logger;
