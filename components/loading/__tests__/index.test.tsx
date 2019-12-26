import React from 'react';
import { render } from 'enzyme';
import Loading from '..';
import toJson from 'enzyme-to-json';

describe('Loading', () => {
  it('should render Loading components', () => {
    const wrapper = render(
      <>
        <Loading icon="balls" />
        <Loading icon="bars" />
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
