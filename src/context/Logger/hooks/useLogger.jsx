/**
 * @typedef {Object} logger
 * @prop {Function} trace
 * @prop {Function} debug
 * @prop {Function} info
 * @prop {Function} warn
 * @prop {Function} error
 */

import { useContext } from "react";
import LoggerContext from "../LoggerContext";

/**
 *
 * @returns {logger}
 */
function useLogger() {
  const logger = useContext(LoggerContext);
  return logger;
}

export default useLogger;
