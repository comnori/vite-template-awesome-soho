import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function DefaultError() {
  const navigate = useNavigate();

  function handleBackHomeClick() {
    navigate(-1);
  }
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Button
          type="primary"
          onClick={() => handleBackHomeClick()}>
          Go Back
        </Button>
      }
    />
  );
}

export default DefaultError;
