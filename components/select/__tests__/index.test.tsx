import React from 'react';
import { render } from 'enzyme';
import Select, { Option } from '..';
import toJson from 'enzyme-to-json';

describe('Select', () => {
  it('should render Select components', () => {
    const wrapper = render(
      <>
        <Select>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
