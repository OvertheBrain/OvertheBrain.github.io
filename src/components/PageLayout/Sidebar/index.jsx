import React from 'react';
import {
  Affix, Layout, Row, Col, Button,
} from 'antd';
import {
  GitHub,
  Twitter,
  AnimationOutlined, Telegram, ScreenLockLandscape, Screenshot, Videocam,
} from '@mui/icons-material';
import {
  Avatar,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const iconMap = {
  github: <GitHub />,
  twitter: <Twitter />,
  bilibili: <Videocam />,
  telegram: <Telegram />,
};

const { Content } = Layout;

const DomContent = () => (
  <aside>
    <Stack direction="column" alignItems="center" spacing={2.5}>
      <Avatar
        alt="Brian Han"
        src="https://pic.imgdb.cn/item/6202e0852ab3f51d91991243.jpg"
        sx={{ width: 160, height: 160 }}
      />
      <Typography style={{
        fontSize: 28, fontWeight: 600, color: "white", marginBottom: -5,
      }}
      >
        Brian Han
      </Typography>
      <Chip style={{color: 'whitesmoke'}} label="Undergraduate" />
      <Stack direction="row">
        {(Object.entries(Config.social)).map((link) => (
          <IconButton href={link[1]} key={link[0]}>
            {iconMap[link[0]]}
          </IconButton>
        ))}
      </Stack>
      <Stack direction="column" spacing={1.5}>
        <Stack direction="row" spacing={1}>
          <FeatherIcon size="21" icon="map-pin" />
          <Typography component="div">
            Shanghai, China
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <FeatherIcon size="21" icon="mail" />
          <a
            href="mailto: hanyiduo31@126.com;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </Stack>
      </Stack>
      <Button
        type="primary"
        size="large"
        shape="round"
      >
        <a href="/BRIANHAN.pdf">Resume</a>
      </Button>
    </Stack>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
