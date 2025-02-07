import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  status?: ResultStatusType;
  title?: string;
  statusText?: string;
  message?: string;
}

const ErrorPage = (props: RouteError) => {
  const error = useRouteError() as RouteError; // Ép kiểu về RouteError
  const navigation = useNavigate();

  const handleBackHomeBtn = () => {
    navigation("/");
  };

  return (
    <Result
      status={props?.status || error?.status || 404}
      title={props?.title || error?.status || 404}
      subTitle={props?.message || error?.statusText || error?.message || "Not found"}
      extra={
        <Button type="primary" onClick={handleBackHomeBtn}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
