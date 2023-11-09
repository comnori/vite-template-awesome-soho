/**
 * @file JSON 객체를 RouterProvider 컴포넌트의 router로 변경하기 위한 Type 확장
 * @author Yongsik Yun <comnori@gmail.com>
 *
 *   - Enterprise only
 */

import { IndexRouteObject, NonIndexRouteObject, RouteObject as ReactRouterDomRouterObject } from "react-router-dom";

export interface ExtendedElement {
  /** ReactElement에 위치한 폴더 */
  from?: string;
  /** 페이지명 */
  name?: string;
  /** 해당 폴더에 export default 한 대상명 */
  componentName?: string;
}

interface ExtendedIndexRouteObject extends Omit<IndexRouteObject, "element" | "children" | "errorElement"> {
  [index: string]: any;
  element?: ExtendedElement;
  errorElement?: ExtendedElement;
  children?: ExtendedRouteObject[];
}

interface ExtendedNonIndexRouteObject extends Omit<NonIndexRouteObject, "element" | "children" | "errorElement"> {
  [index: string]: any;
  element?: ExtendedElement;
  errorElement?: ExtendedElement;
  children?: ExtendedRouteObject[];
}

export type ExtendedRouteObject = ExtendedIndexRouteObject | ExtendedNonIndexRouteObject;
export type RouteObject = ReactRouterDomRouterObject;
