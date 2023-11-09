/**
 * @file Router 컴포넌트 관련 Utils
 * @author Yongsik Yun <comnori@gmail.com>
 * @module routerUtils
 * @description Enterprise only
 *
 */

/**
 * @typedef {import("config/types/ExtendedRouter").ExtendedElement} ExtendedElement
 * @typedef {import("config/types/ExtendedRouter").ExtendedRouteObject}  ExtendedRouteObject
 * @typedef {import("config/types/ExtendedRouter").RouteObject} RouteObject
 */

import { NotFound } from "components/organisms/Common/Result";
import ExactlyCenter from "components/templates/ExactlyCenter";
import { createElement } from "react";

// TODO : ErrorBoundary로 변경 필요
// TODO : 별도의 Utils 프로젝트로 이동

/**
 * 컴포넌트명 및 위치로
 * @param {ExtendedElement} componentName
 * @returns {any}
 */
export function getElementByComponentName({ componentName, from, name }) {
  return (async () =>
    await import(`../../${from}/${componentName}`)
      .then((module) => {
        return createElement(module);
      })
      .catch((e) => {
        return (
          <ExactlyCenter>
            <NotFound />
          </ExactlyCenter>
        );
      }))();
}

// TODO : https://reactrouter.com/en/main/route/lazy
/**
 *
 * @param {string} elementName
 * @param {ExtendedRouteObject} item
 * @param {Function} convertFn
 * @returns {React.ReactElement | RouteObject[] | undefined}
 */
function getComponentByPropertyName(elementName, item, convertFn) {
  if (elementName in item) {
    const element = item[elementName];

    if (element) {
      return convertFn(element);
    }
  }

  return undefined;
}
// TODO : path string 조건 추가 lower snake case 아닐 경우 exception
/**
 * JSON 객체를 Router 형식으로 변환
 *
 * @example
 *   const extendedRouter = createBrowserRouter(convertJsonToRouter(ExtendedRouter));
 *
 *   return <RouterProvider router={extendedRouter}}/>
 *
 * @param {ExtendedRouteObject[]} routerJson
 * @returns {RouteObject[]} react-router 에서 사용할 router
 */
export function convertJsonToRouter(routerJson) {
  const result = routerJson
    .map((item) => {
      if (item) {
        const element = getComponentByPropertyName("element", item, getElementByComponentName);
        const errorElement = getComponentByPropertyName("errorElement", item, getElementByComponentName);
        const children = getComponentByPropertyName("children", item, convertJsonToRouter);

        return { ...item, element, errorElement, children };
      }

      return {};
    })
    .filter((item) => Object.keys(item).length > 0);

  return result;
}

const routerUtils = {
  convertJsonToRouter,
};

export default routerUtils;
