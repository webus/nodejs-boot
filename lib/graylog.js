const winston = require('winston');
const logger = require('./winston');
const graylog = require('winston-tcp-graylog');

const graylogOptions = {
    gelfPro: {
        adapterName: 'tcp',
        adapterOptions: {
            host: process.env.GRAYLOG_HOST,
            port: 12201
        }
    }
};

logger.add(winston.transports.TcpGraylog, graylogOptions);

logger.transports.tcpGraylog
    .on('error', (err) => {
        console.log(err);
    });

module.exports = logger;
