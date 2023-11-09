import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function UnAuthorized() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleBackHomeClick() {
    navigate(-1);
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle={t("error.page.unauthorized")}
      extra={
        <Button
          type="primary"
          onClick={() => handleBackHomeClick()}>
          {t("text.go-back")}
        </Button>
      }
    />
  );
}

export default UnAuthorized;
