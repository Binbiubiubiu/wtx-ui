import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card, { InlineCard } from '..';

describe('<Card>', () => {
  it('should render <Card/> components', () => {
    const wrapper = render(
      <>
        <Card icon={12} title="摄像头类型(种)" content="6" style={{ marginBottom: 20 }} />
        <InlineCard title="消防联网设备总数(个)" content="300" />
      </>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });

  it('should Card render ok', () => {
    const wrapper = render(
      <>
        <Card icon={<span className="test-icon">icon</span>} title="标题" content={6} />
        <Card
          icon={<span className="test-icon">icon</span>}
          title="标题"
          content={<span className="test-content"></span>}
        />
      </>,
    );

    expect(wrapper.find('.test-icon')).toHaveLength(2);
    expect(wrapper.find('.test-content')).toHaveLength(1);
    expect(
      wrapper
        .find('.wtx-card__title')
        .eq(0)
        .text(),
    ).toEqual('标题');
    expect(wrapper.find('.wtx-card__content').text()).toEqual('6');
    expect(wrapper.find('.led-num')).toHaveLength(1);
  });

  it('should Card render ok', () => {
    const wrapper = render(<InlineCard title="标题" content="300" />);

    expect(wrapper.find('.wtx-inline-card__title').text()).toEqual('标题');
    expect(wrapper.find('.wtx-inline-card__content').text()).toEqual('300');
    expect(wrapper.find('.led-num')).toHaveLength(1);
  });
});
