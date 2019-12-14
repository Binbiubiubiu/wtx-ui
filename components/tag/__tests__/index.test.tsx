import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tag from '..';

describe('<Tag />', () => {
  it('should render a <Tag/> components', () => {
    const wrapper = render(
      <div>
        <Tag>默认</Tag>
        <Tag radius>默认</Tag>
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
