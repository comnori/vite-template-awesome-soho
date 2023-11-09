/**
 * @file 좌측 Sider가 있는 기본 레이아웃
 * @author Yongsik Yun <comnori@gmail.com>
 *
 */

/**
 * @typedef Props
 * @prop {React.ReactNode} [children]
 *
 * @typedef {import("config/MenuItems").ItemType} ItemType
 */

import { AutoComplete, FloatButton, Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import MenuItems from "config/MenuItems";
import { useState } from "react";
import styles from "./BasicLayout.module.scss";

const { Content, Sider } = Layout;

/**
 * 기본 레이아웃
 *
 * @component
 * @param {Props} props
 * @returns {React.ReactElement}
 */
function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);

  function handleFloatButtonClick() {
    setFloatOpen(!floatOpen);
  }

  return (
    <Layout
      hasSider
      className={styles.layout}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <AutoComplete
          className={styles.autocomplate}
          placeholder="메뉴 검색"
        />
        <Menu
          items={MenuItems.ADMIN}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
          {children}
          <FloatButton.Group
            open={floatOpen}
            trigger="click"
            icon={<CustomerServiceOutlined />}
            onClick={() => handleFloatButtonClick()}>
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
