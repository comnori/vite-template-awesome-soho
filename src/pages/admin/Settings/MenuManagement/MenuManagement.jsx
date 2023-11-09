import { Col, Row, Tree } from "antd";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: (
              <span
                style={{
                  color: "#1677ff",
                }}>
                sss
              </span>
            ),
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

/**
 * ExtendedMenu에서 사용하는 JSON을 관리하는 UI
 *
 * - Enterprise Only
 *
 */
export default function MenuManagement() {
  return (
    <Row>
      <Col span={12}>
        <Tree treeData={treeData} />
      </Col>
      <Col span={12}>메뉴에 대한 세부 설정</Col>
    </Row>
  );
}
