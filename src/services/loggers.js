import winston from 'winston';

const customLevelOptions = {
    levels: {
        error: 0,
        warning: 1,
    }
}

export const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: "info"
        }),
        new winston.transports.Console({
            filename: './logs/warning.log',
            level: "warning"
        }),
        new winston.transports.Console({
            filename: './logs/error.log',
            level: "error"
        })
    ]
})

export const levels = [
    winston.info("127.0.0.1 - there's no place like home"),
    logger.warning("127.0.0.1 - there's no place like home"),
    logger.error("127.0.0.1 - there's no place like home"),
]

export const addLoger = (req, res, next) => {
    req.logger = logger;
    req.logger.error(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString}`);
    next();
}