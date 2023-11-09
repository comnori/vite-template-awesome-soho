import Icon from "@ant-design/icons/lib/components/Icon";
import { Button } from "antd";
import { IconBxMoonSVG, IconBxSunSVG } from "assets/Icons/CustomIcons";
import { toggleTheme } from "features/antd/antdSlice";
import { useDispatch, useSelector } from "react-redux";

function ThemeChangeSwitch() {
  const themeName = useSelector(
    /** @param {import("lib/storeConfig").ReduxStore} state */
    (state) => state.antdConfig.themeName,
  );
  const dispatch = useDispatch();

  return (
    <Button
      shape="circle"
      icon={<Icon component={themeName === "light" ? IconBxSunSVG : IconBxMoonSVG} />}
      onClick={() => dispatch(toggleTheme())}
    />
  );
}

export default ThemeChangeSwitch;
