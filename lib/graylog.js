const winston = require('winston');
const logger = require('./winston');
const graylog = require('winston-tcp-graylog');

if (!process.env.GRAYLOG_HOST) {
    console.log("GRAYLOG_HOST not found. Graylog disabled");
    module.exports = logger;
    return;
}

const graylogOptions = {
    gelfPro: {
        adapterName: 'tcp',
        adapterOptions: {
            host: process.env.GRAYLOG_HOST,
            port: 12201
        }
    },
    level: process.env.GRAYLOG_LOG_LEVEL || process.env.LOG_LEVEL || 'silly',
    timestamp: true,
    handleExceptions: true,
    prettyPrint: true
};

logger.add(winston.transports.TcpGraylog, graylogOptions);

logger.transports.tcpGraylog
    .on('error', (err) => {
        console.log(err);
    });

module.exports = logger;
