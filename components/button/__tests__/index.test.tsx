import React from 'react';
import { render, shallow } from 'enzyme';
import { Button } from '..';
import toJson from 'enzyme-to-json';

describe('<Button>', () => {
  it('should render <Button> components', () => {
    const wrapper = render(
      <div>
        <Button>默认视频</Button>
        <Button up>上一页</Button>
        <Button down>下一页</Button>
        <Button disabled>禁用状态</Button>
        <Button actived>激活状态</Button>
      </div>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });

  it('should button has arrow', () => {
    const wrapper = render(
      <div>
        <Button up>上一页</Button>
        <Button down>下一页</Button>
      </div>,
    );

    expect(wrapper.find('.wtx-button__up')).toHaveLength(1);
    expect(wrapper.find('.wtx-button__down')).toHaveLength(1);
  });

  it('should button can be click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>可点击</Button>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it("should button disabled can't be click", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button disabled onClick={onClick}>
        禁用状态
      </Button>,
    );
    wrapper.find('button').simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should button can be actived', () => {
    const wrapper = render(<Button actived>激活状态</Button>);
    expect(wrapper.hasClass('wtx-button__actived')).toBeTruthy();
  });
});
