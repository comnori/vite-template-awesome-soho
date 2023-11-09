// @ts-nocheck
import { Link } from "react-router-dom";

function itemRender(route, params, items, paths) {
  const item = "";
  const last = items.indexOf(item) === items.length - 1;
  return last ? <span>{item.title}</span> : <Link to={paths.join("/")}>{item.title}</Link>;
}

const breadCrumbUtils = {
  itemRender,
};

export default breadCrumbUtils;
