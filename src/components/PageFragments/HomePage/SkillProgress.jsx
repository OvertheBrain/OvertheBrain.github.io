import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div style={{ marginTop: -5 }}>
    <h2>My Skills</h2>
    <Row style={{ marginTop: -10 }} gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="C++"
          color="#f12970"
        />
        <ProgressBar
          percent={90}
          text="JavaScript"
          color="#fcbf1d"
        />
        <ProgressBar
          percent={75}
          text="Java"
          color="#f64c0b"
        />
        <ProgressBar
          percent={90}
          text="NodeJS"
          color="#215805"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="Python"
          color="#063c8d"
        />
        <ProgressBar
          percent={70}
          text="Mysql"
        />
        <ProgressBar
          percent={50}
          text="Springboot"
          color="#24cd08"
        />
        <ProgressBar
          percent={80}
          text="Unity"
          color="black"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
