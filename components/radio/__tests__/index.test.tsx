import React from 'react';
import { render } from 'enzyme';
import { Radio, RadioButton } from '..';
import toJson from 'enzyme-to-json';

describe('Radio', () => {
  it('should render Radio components', () => {
    const wrapper = render(
      <>
        <Radio.Group value="七天">
          <Radio label="三天" />
          <Radio label="七天" />
          <Radio label="三十天" />
        </Radio.Group>
        <RadioButton.Group value="图表">
          <RadioButton label="图表">图表</RadioButton>
          <RadioButton label="列表">列表</RadioButton>
        </RadioButton.Group>
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
