/**
 * @file 메뉴 컴포넌트 관련 Utils
 * @author Yongsik Yun <comnori@gmail.com>
 * @module menuUtils
 * @description Enterprise only
 *
 */

import { Link } from "react-router-dom";
import { convertStrToIcon } from "utils/icons";

/**
 * @typedef {import("config/types/ExtendedMenuItems").ExtendedLabelType} ExtendedLabelType *
 * @typedef {import("config/ExtendedMenuItems").ExtendedItemType} ExtendedItemType *
 * @typedef {import("config/MenuItems").ItemType} ItemType
 *
 */

// TODO : key 재작성 기능 옵셔널하게 추가
// TODO : i18n 적용
/**
 * 주어진 제목과 경로로 Link 컴포넌트를 생성합니다.
 *
 * @example
 *   // <Link to="/">메뉴명</Link>
 *   convertStrToLink({ title: "메뉴명", path: "/" });
 *
 * @param {ExtendedLabelType} labelObject - 라벨 정보를 포함하는 객체.
 * @returns {React.ReactElement} - 생성된 Link 컴포넌트.
 */
export function convertStrToLink({ title, path }) {
  if (path) {
    return <Link to={path}>{title}</Link>;
  }

  return <span>{title}</span>;
}

/**
 * JSON 객체를 Antd Menu items 형식으로 변환
 *
 * @example
 *   const menuItems = [
 *     {
 *       key: "sub1",
 *       label: { title: "설정" },
 *       icon: "SettingOutlined",
 *       children: [
 *         {
 *           key: "g1",
 *           label: { title: "사용자" },
 *           children: [
 *             {
 *               key: "1",
 *               label: { path: "/admin/#1", title: "사용자 관리" },
 *               icon: "UserOutlined",
 *             },
 *           ],
 *           type: "group",
 *         },
 *       ],
 *     },
 *   ];
 *
 *   const convMenuItems = convertJsonToMenuItems(menuItems);
 *
 *   return <Menu items={convMenuItems} />;
 *
 * @param {ExtendedItemType[]} menuJson - Extended antd ItemType
 * @returns {ItemType[]}
 */
export function convertJsonToMenuItems(menuJson) {
  return menuJson.map((item) => {
    let icon;
    let label;
    let children;

    if ("icon" in item) {
      const { icon: iconName } = item;

      if (iconName) {
        icon = convertStrToIcon(iconName);
      }
    }

    if ("label" in item) {
      const { label: labelObject } = item;

      if (labelObject) {
        label = convertStrToLink(labelObject);
      }
    }

    if ("children" in item) {
      const { children: extendedChildren } = item;

      if (extendedChildren) {
        children = convertJsonToMenuItems(extendedChildren);
      }
    }

    return { ...item, icon, label, children };
  });
}

const menuUtils = {
  convertStrToLink,
  convertJsonToMenuItems,
};

export default menuUtils;
