import {
  SiAntdesign,
  SiAxios,
  SiCreatereactapp,
  SiCypress,
  SiDotenv,
  SiEditorconfig,
  SiEslint,
  SiI18next,
  SiJavascript,
  SiJest,
  SiPrettier,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiSonarlint,
  SiStorybook,
  SiYarn,
} from "@icons-pack/react-simple-icons";
import { Card, Space, Tooltip, Typography } from "antd";
import styles from "../Homepage.module.scss";

const { Title, Paragraph } = Typography;

function Template1() {
  return (
    <Card title="Legacy">
      <Typography>
        <Title
          level={5}
          className={styles.title}>
          Language
        </Title>
        <Paragraph>
          <Tooltip title="Javascipt">
            <SiJavascript color="default" />
          </Tooltip>
        </Paragraph>
        <Title
          level={5}
          className={styles.title}>
          Created by
        </Title>
        <Paragraph>
          <Space>
            <Tooltip title="Create React App">
              <SiCreatereactapp color="default" />
            </Tooltip>
            <Tooltip title="Yarn">
              <SiYarn color="default" />
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
            <Tooltip title="React-router">
              <SiReactrouter color="default" />
            </Tooltip>
            <Tooltip title="Ant Design">
              <SiAntdesign color="default" />
            </Tooltip>
            <Tooltip title="Redux Toolkit">
              <SiRedux color="default" />
            </Tooltip>
            <Tooltip title="Axios">
              <SiAxios color="default" />
            </Tooltip>
            <Tooltip title="Sass">
              <SiSass color="default" />
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
            <Tooltip title="DotENV">
              <SiDotenv color="default" />
            </Tooltip>
            <Tooltip title="EditorConfig">
              <SiEditorconfig />
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
      </Typography>
    </Card>
  );
}

export default Template1;
