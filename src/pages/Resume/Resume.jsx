import { ClockCircleOutlined } from "@ant-design/icons";
import { Anchor, Carousel, Col, Row, Timeline, Typography } from "antd";

const { Title, Paragraph } = Typography;
function Resume() {
  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Carousel>
          <div>
            <h3
              style={{
                margin: 0,
                height: "320px",
                color: "#fff",
                textAlign: "center",
                background: "#364d79",
              }}>
              About Me
            </h3>
          </div>
        </Carousel>
      </Col>
      <Col span={24}>
        <Typography>
          <Title>About Me</Title>
          <Paragraph>blah blah blah</Paragraph>
        </Typography>
      </Col>
      <Col
        span={24}
        xl={22}>
        <Typography>
          <Title>Career</Title>
        </Typography>
        <Timeline
          mode="alternate"
          items={[
            {
              children: "Create a services site 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
              color: "green",
            },
            {
              dot: (
                <ClockCircleOutlined
                  style={{
                    fontSize: "16px",
                  }}
                />
              ),
              children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
            },
            {
              color: "red",
              children: "Network problems being solved 2015-09-01",
            },
            {
              children: "Create a services site 2015-09-01",
            },
            {
              dot: (
                <ClockCircleOutlined
                  style={{
                    fontSize: "16px",
                  }}
                />
              ),
              children: "Technical testing 2015-09-01",
            },
          ]}
        />
      </Col>
      <Col
        span={0}
        xl={2}>
        <Anchor
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
            },
          ]}
        />
      </Col>
      <Col span={24}>
        <Typography>
          <Title>Certification</Title>
        </Typography>
      </Col>
      <Col span={24}>
        <Typography>
          <Title>Skills</Title>
          <Title level={2}>FrontEnd</Title>
          <Title level={2}>BackEnd</Title>
          <Title level={2}>DevOps</Title>
          <Title level={2}>AI / ML</Title>
        </Typography>
      </Col>
      <Col span={24}>
        <Typography>
          <Title>Tools</Title>
          <Title level={2}>Platform</Title>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
          </a>
          <Title level={2}>Operation System</Title>
          <Title level={2}>Software</Title>
          <Title level={2}>Framework</Title>
          <Title level={2}>Library</Title>
          <Title level={2}>IDE</Title>
          <Title level={2}>Documentation</Title>
        </Typography>
      </Col>
      <Col span={24}>
        <Typography>
          <Title>Link</Title>
        </Typography>
      </Col>
      <Col span={24}>
        <Typography>
          <Title>Contact</Title>
        </Typography>
      </Col>
    </Row>
  );
}

export default Resume;
