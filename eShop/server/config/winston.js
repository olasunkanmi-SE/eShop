const winston = require("winston");

const errorFormat = winston.format.printf((info) => {
  return `${info.timestamp} ${info.level} ${info.message}`;
});

const options = {
  file: {
    level: "info",
    filename: "logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFIles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  http: {
    level: "warn",
    json: true,
  },
};

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), errorFormat),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    new winston.transports.Http(options.http),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};

module.exports = logger;
