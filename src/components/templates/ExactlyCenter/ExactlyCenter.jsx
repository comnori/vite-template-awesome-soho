/**
 * @typedef Props
 * @prop {React.ReactNode} [children]
 */

import { Col, Row, theme } from "antd";

const { useToken } = theme;

/**
 * @param {Props} props
 */
function ExactlyCenter({ children }) {
  const {
    token: {
      // @ts-ignore
      Layout: { headerHeight },
    },
  } = useToken();

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: `calc(100vh - ${headerHeight * 2}px)` }}>
      <Col>{children}</Col>
    </Row>
  );
}

export default ExactlyCenter;
