import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tag from '..';

describe('<Tag />', () => {
  it('should render <Tag/> components', () => {
    const wrapper = render(
      <div>
        <Tag>默认</Tag>
        <Tag radius>圆角标签</Tag>
        <Tag type="ok">正常状态</Tag>
        <Tag type="danger">异常状态</Tag>
        <Tag type="warning">警告状态</Tag>
        <Tag type="disabled">禁用状态</Tag>
        <Tag type="online">在线状态</Tag>
        <Tag type="outline">离线状态</Tag>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });

  it('should find tag radius', () => {
    const wrapper = render(<Tag radius>圆角标签</Tag>);

    expect(wrapper.hasClass('wtx-tag__radius')).toBeTruthy();
  });

  it('should tag type is ok', () => {
    const wrapper = render(<Tag type="ok">圆角标签</Tag>);

    expect(wrapper.hasClass('wtx-tag__ok')).toBeTruthy();
  });
});
