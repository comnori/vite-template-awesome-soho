import { createContext } from "react";

/**
 * @type {React.Context<any>}
 */
const LoggerContext = createContext(console);

export default LoggerContext;
