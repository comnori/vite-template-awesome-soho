import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Col, FloatButton, Layout, Menu, Popover, Row, Space, Typography, theme } from "antd";
import LanguageSwitch from "components/molecules/LanguageSwitch";
import MenuItems from "config/MenuItems";
import ThemeChangeSwitch from "features/antd/ThemeChangeSwitch";
import { useEffect, useState } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";

const { Content, Header, Footer } = Layout;
const { Text, Link } = Typography;
const { useToken } = theme;

/**
 * 사이드바가 존재하지 않는 최소형의 레이아웃
 *
 */
function MinimalLayout() {
  const [menuSelectedKeys, setMenuSelectedKeys] = useState([""]);

  const {
    token: {
      // @ts-ignore
      Layout: { headerHeight },
      colorBgContainer,
    },
  } = useToken();

  const navigate = useNavigate();
  const matches = useMatches();

  useEffect(() => {
    const selectedKeys = matches.filter(({ id }) => !id.toLowerCase().includes("root")).map(({ id }) => id);

    setMenuSelectedKeys(selectedKeys);
  }, [matches]);

  /**
   * @param {string} path
   */
  function handleLinkClick(path) {
    navigate(path);
  }

  return (
    <Layout>
      <Header style={{ background: colorBgContainer }}>
        <Row wrap={false}>
          <Col flex="auto">
            <Menu
              items={MenuItems.NORMAL}
              selectedKeys={menuSelectedKeys}
              mode="horizontal"
              overflowedIndicator={<MenuOutlined />}
            />
          </Col>
          <Col flex="90px">
            <LanguageSwitch />
          </Col>
          <Col flex="40px">
            <ThemeChangeSwitch />
          </Col>
          <Col flex="40px">
            <Space align="center">
              <Popover
                placement="bottomRight"
                trigger="hover"
                content={
                  <Space direction="vertical">
                    <Link onClick={() => handleLinkClick("/login")}>Login</Link>
                    <Link onClick={() => handleLinkClick("/settings")}>Settings</Link>
                  </Space>
                }>
                <Badge count={0}>
                  <Avatar
                    shape="circle"
                    size="large"
                    icon={<UserOutlined />}
                  />
                </Badge>
              </Popover>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          minHeight: `calc(100vh - ${headerHeight * 2}px)`,
        }}>
        <Outlet />
        <FloatButton.BackTop />
      </Content>
      <Footer style={{ height: headerHeight, background: colorBgContainer }}>
        <Row
          justify="center"
          align="middle">
          <Col>
            <Text>
              Copyright <a href="https://www.linkedin.com/in/yongsik-yun-36260344/">@comnori</a> All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default MinimalLayout;
