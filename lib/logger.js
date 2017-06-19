let logger = null;

module.exports = () => {
    if (!logger) {
        logger = require('./sentry');
    }
    return logger;
};
