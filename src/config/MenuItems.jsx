/**
 * @file 메뉴 Item 용 JSON
 * @author Yongsik Yun <comnori@gmail.com>
 *
 */

/**
 * @typedef {import("antd/es/menu/hooks/useItems").ItemType} ItemType - antd menu ItemType
 */

import { ApartmentOutlined, HomeOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

/**
 * 일반 메뉴
 * @enum {ItemType[]}
 * @ignore
 */
const NormalMenuItems = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "resume",
    label: <Link to="/about-me">About-Me</Link>,
    icon: <UserOutlined />,
  },
];

/**
 * @type {ItemType[]}
 * @ignore
 */
const AdminMenuitems = [
  {
    key: "sub1",
    label: "설정",
    icon: <SettingOutlined />,
    children: [
      {
        key: "g1",
        label: "사용자",
        children: [
          {
            key: "1",
            label: <Link to="/admin/settings/user-management">사용자 관리</Link>,
            icon: <UserOutlined />,
          },
        ],
        type: "group",
      },
      {
        key: "g2",
        label: "메뉴",
        children: [
          {
            key: "3",
            label: <Link to="/admin/settings/router-management">메뉴 관리</Link>,
            icon: <ApartmentOutlined />,
          },
          {
            key: "4",
            label: <Link to="/admin/settings/menu-management">메뉴 관리</Link>,
            icon: <MenuUnfoldOutlined />,
          },
        ],
        type: "group",
      },
    ],
  },
];

/**
 * 일반 / 관리자 메뉴
 * @enum {ItemType[]}
 */
const MenuItems = {
  NORMAL: NormalMenuItems,
  ADMIN: AdminMenuitems,
};

export default MenuItems;
