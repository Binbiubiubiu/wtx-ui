import React, { FC } from 'react';
import { Row } from '.';

export default {
  title: '公共组件|弹性布局',
};

const Block: FC = ({ children }) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: '#1EA7FD',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export const 行 = () => (
  <Row align="middle" justify="space-between" style={{ width: 230 }}>
    <Block>1</Block>
    <Block>2</Block>
  </Row>
);
