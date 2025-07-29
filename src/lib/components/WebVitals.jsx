import { onCLS, onFID, onLCP } from "web-vitals";

/**
 *
 * @param {sendToAnalytics | undefined} [onPerfEntry]
 */
function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
  }
}

// TODO : https://codelabs.developers.google.com/codelabs/web-vitals-google-analytics-bigquery?hl=ko#4
// TODO : .env 를 통해 사용여부 추가 필요
/**
 * Google Analytics 에 전송
 *
 * @param {import("web-vitals").Metric} metric
 * @return {void}
 */
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = "https://example.com/analytics";

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

if (import.meta.env.PROD) {
  reportWebVitals(sendToAnalytics);
}

reportWebVitals();

/**
 * @typedef {Object} Props
 * @prop {React.ReactNode} [children]
 */

/**
 *
 * @component
 * @param {Props} props
 * @returns {React.ReactNode}
 */
function WebVitals({ children }) {
  return <div>{children}</div>;
}

export default WebVitals;
