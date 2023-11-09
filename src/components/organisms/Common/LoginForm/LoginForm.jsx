import { Button, Checkbox, Col, Form, Input, Row, theme } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;

function LoginForm() {
  const {
    token: {
      // @ts-ignore
      Layout: { headerHeight },
    },
  } = useToken();

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        padding: "0 50px",
        minHeight: `calc(100vh - ${headerHeight * 2}px)`,
      }}>
      <Col>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off">
          <Form.Item
            label={t("text.username")}
            name={t("text.username")}
            rules={[
              {
                required: true,
                message: t("warn.required", { target: t("text.username") }),
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label={t("text.password")}
            name={t("text.password")}
            rules={[
              {
                required: true,
                message: t("warn.required", { target: t("text.password") }),
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Checkbox>{t("text.remember-me")}</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button
              type="primary"
              htmlType="submit">
              {t("test.login")}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginForm;
