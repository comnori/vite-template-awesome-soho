import {
  SiAntdesign,
  SiBun,
  SiContainerd,
  SiCypress,
  SiEditorconfig,
  SiEslint,
  SiGraphql,
  SiI18next,
  SiJest,
  SiNextdotjs,
  SiPrettier,
  SiReact,
  SiReactivex,
  SiSonarlint,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Card, Space, Tooltip, Typography, Watermark } from "antd";
import styles from "../Homepage.module.scss";

const { Title, Paragraph } = Typography;

function EnterPriseTemplate() {
  return (
    <Watermark
      content="Working"
      gap={[50, 50]}>
      <Card title="Enterprise">
        <Typography>
          <Title
            level={5}
            className={styles.title}>
            Language
          </Title>
          <Paragraph>
            <Tooltip title="Typescript">
              <SiTypescript color="default" />
            </Tooltip>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Created by
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="Vite">
                <SiVite color="default" />
              </Tooltip>
              /
              <Tooltip title="Bun">
                <SiBun />
              </Tooltip>
            </Space>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Library
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="React">
                <SiReact color="default" />
              </Tooltip>
              <Tooltip title="NextJS">
                <SiNextdotjs />
              </Tooltip>
              <Tooltip title="Ant Design">
                <SiAntdesign color="default" />
              </Tooltip>
              <Tooltip title="React-graph">
                <SiGraphql color="default" />
              </Tooltip>
              <Tooltip title="RxJS">
                <SiReactivex color="default" />
              </Tooltip>
              <Tooltip title="Tailwindcss">
                <SiTailwindcss color="default" />
              </Tooltip>
              <Tooltip title="i18next">
                <SiI18next />
              </Tooltip>
            </Space>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Dev tools
          </Title>
          <Paragraph>
            <Space wrap>
              <Tooltip title="ESLint">
                <SiEslint color="default" />
              </Tooltip>
              <Tooltip title="Prettier">
                <SiPrettier color="default" />
              </Tooltip>
              <Tooltip title="EditorConfig">
                <SiEditorconfig />
              </Tooltip>
              <Tooltip title="Dev Container">
                <SiContainerd />
              </Tooltip>
              <Tooltip title="SonarLint">
                <SiSonarlint color="default" />
              </Tooltip>
              <Tooltip title="Jest">
                <SiJest color="default" />
              </Tooltip>
              <Tooltip title="StrobyBook">
                <SiStorybook color="default" />
              </Tooltip>
              <Tooltip title="Cypress">
                <SiCypress />
              </Tooltip>
            </Space>
          </Paragraph>
          <Title
            level={5}
            className={styles.title}>
            Feature
          </Title>
          <Paragraph>
            <ol>
              <li>Backend integration</li>
              <li>ACL</li>
              <li>Dynamic Router</li>
              <li>Dynamic Menu</li>
              <li>More Samples</li>
            </ol>
          </Paragraph>
        </Typography>
      </Card>
    </Watermark>
  );
}

export default EnterPriseTemplate;
