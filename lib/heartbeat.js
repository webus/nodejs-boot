const log = require('./logger');

const startDate = new Date();
module.exports = () => {
    log.info(process.env.HOSTNAME || "localhost", {
        status: 'running',
        startedAt: startDate,
        uptime: new Date().getTime() - startDate.getTime()
    });
};

setInterval(module.exports, 60 * 1000);
