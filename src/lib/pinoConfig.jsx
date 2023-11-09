import pino from "pino";

function getLogger() {
  const logger = pino({
    browser: { asObject: true },
  });

  return logger;
}

export default getLogger;
