import { Button, Result } from "antd";
import LoggerContext from "context/Logger/LoggerContext";
import { Component } from "react";
import { withTranslation } from "react-i18next";

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (this.context) {
      this.context.error(error, errorInfo);
    }
  }

  render() {
    const { hasError } = this.state;
    const { t, children } = this.props;
    if (hasError) {
      return (
        <Result
          status="error"
          title={t("error.page.unexpected")}
          extra={
            <Button
              type="primary"
              onClick={() => window.location.reload()}>
              Reload
            </Button>
          }
        />
      );
    }
    return children;
  }
}

GlobalErrorBoundary.contextType = LoggerContext;

export default withTranslation()(GlobalErrorBoundary);
