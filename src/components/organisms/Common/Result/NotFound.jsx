import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleBackHomeClick() {
    navigate(-1);
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle={t("error.page.not-found")}
      extra={
        <Button
          type="primary"
          onClick={() => handleBackHomeClick()}>
          {t("text.go-back")}{" "}
        </Button>
      }
    />
  );
}

export default NotFound;
