import React from 'react';
import { action } from '@storybook/addon-actions';
import Icon from '../icon';
import Button from '../button';
import { Dialog } from './dialog';

export default {
  title: '公共组件|弹窗',
};

export const 默认 = () => {
  const titleIcon = <Icon className="m-r-8" path="assets/dialog/Q017.png" width="16" height="18" />;
  const headerExpandRender = () => <Button>近七天记录</Button>;
  return (
    <Dialog
      titleIcon={titleIcon}
      title="视频分析"
      headerExpandRender={headerExpandRender}
      onClose={action('dialog close')}
    >
      <div style={{ width: 100, height: 100 }} />
    </Dialog>
  );
};

export const 明亮主题 = () => {
  const titleIcon = <Icon className="m-r-8" path="assets/dialog/Q017.png" width="16" height="18" />;
  const headerExpandRender = () => <Button>近七天记录</Button>;
  return (
    <Dialog
      titleIcon={titleIcon}
      title="视频分析"
      theme="light"
      headerExpandRender={headerExpandRender}
      onClose={action('dialog close')}
    >
      <div style={{ width: 100, height: 100 }} />
    </Dialog>
  );
};
