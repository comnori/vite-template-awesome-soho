/**
 * @file Icon component 관련 Utils 파일
 * @author Yongsik Yun <comnori@gmail.com>
 * @module iconUtils
 * @description Enterprise only
 */

import * as icons from "@ant-design/icons";
import { createElement } from "react";

/**
 * Icon 컴포넌트 문자열을 입력받아 antd icon component로 변환
 *
 * @example
 *   // <StepForwardOutlined />
 *   convertStrToIcon("StepForwardOutlined");
 *
 * @param {string} iconName - {@link https://ant.design/components/icon Ant Design Icon}에 등록된 컴포넌트명
 * @returns {React.ReactElement}
 */
export function convertStrToIcon(iconName) {
  // TODO : i18n 및 템플릿 적용
  const errMsg = "iconName must not be empty!";
  if (!iconName) throw errMsg;

  // @ts-ignore
  return createElement(icons[iconName]);
}

const iconUtils = {
  convertStrToIcon,
};

export default iconUtils;
