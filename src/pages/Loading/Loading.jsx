import { Result, Spin } from "antd";

export default function Loading() {
  return (
    <Result
      title="Loading..."
      subTitle="페이지를 로딩 중입니다."
      icon={<Spin size="large" />}
    />
  );
}
