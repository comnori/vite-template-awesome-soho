import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { DefaultError, NotFound, UnAuthorized } from "../Result";

// TODO : 테마 및 레이아웃 적용 안되는 문제 해결
function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // Client error responses
    if (error.status === 404) {
      return <NotFound />;
    }

    if (error.status === 401) {
      return <UnAuthorized />;
    }

    // Server error responses
  }

  return <DefaultError />;
}
export default RootErrorBoundary;
