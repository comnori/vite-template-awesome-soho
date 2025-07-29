/**
 * @typedef Props
 * @prop {Object} [logger]
 * @prop {React.ReactNode} [children]
 */

// TODO : NPM 패키지로 추출 후 제거
import LoggerContext from "../LoggerContext";

/**
 * @param {Props} props
 */
function LoggerProvider({ logger, children }) {
  return <LoggerContext.Provider value={logger}>{children}</LoggerContext.Provider>;
}

export default LoggerProvider;
