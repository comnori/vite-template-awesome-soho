/**
 * @file JSON 객체를 Menu 컴포넌트의 Itemtype으로 변경하기 위한 Type 확장
 * @author Yongsik Yun <comnori@gmail.com>
 *
 * * Enterprise only
 */

import {
  MenuDividerType,
  MenuItemGroupType,
  MenuItemType,
  SubMenuType,
  ItemType as antdItemType,
} from "antd/es/menu/hooks/useItems";

/**
 * label property 확장
 */
export interface ExtendedLabelType {
  /** Router 경로 */
  path?: string;
  /** Menu에 보이는 문자 */
  title: string;
}

interface ExtendedMenuItemType extends Omit<MenuItemType, "label"> {
  label?: ExtendedLabelType;
  /** Antd Icon 컴포넌트명 */
  icon?: string;
}

interface ExtendedSubMenuType<T extends ExtendedMenuItemType = ExtendedMenuItemType>
  extends Omit<SubMenuType, "children" | "label"> {
  label?: ExtendedLabelType;
  icon?: string;
  children: ExtendedItemType<T>[];
}
interface ExtendedMenuItemGroupType<T extends ExtendedMenuItemType = ExtendedMenuItemType>
  extends Omit<MenuItemGroupType, "children" | "label"> {
  label?: ExtendedLabelType;
  children?: ExtendedItemType<T>[];
}

/**
 * antd ItemType 확장
 */
export type ExtendedItemType<T extends ExtendedMenuItemType = ExtendedMenuItemType> =
  | T
  | ExtendedSubMenuType<T>
  | ExtendedMenuItemGroupType<T>
  | MenuDividerType;

export type ItemType = antdItemType;
