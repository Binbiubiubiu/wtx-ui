import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dialog from '../index';
import Icon from '../../icon';
import { Button } from '../../button';

describe('Dialog', () => {
  it('should render Dialog components', () => {
    const wrapper = render(
      <>
        <Dialog
          titleIcon={<Icon className="m-r-8" path="assets/Q017.png" width="16" height="18" />}
          title="视频分析"
          headerExpandRender={() => <Button>近七天记录</Button>}
          onClose={() => {}}
        >
          <div style={{ width: 100, height: 100 }} />
        </Dialog>
        <Dialog
          titleIcon={<Icon className="m-r-8" path="assets/Q017.png" width="16" height="18" />}
          theme="light"
          title="视频分析"
          headerExpandRender={() => <Button>近七天记录</Button>}
          onClose={() => {}}
        >
          <div style={{ width: 100, height: 100 }} />
        </Dialog>
      </>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
