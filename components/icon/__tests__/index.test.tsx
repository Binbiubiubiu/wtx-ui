import React from 'react';
import { render } from 'enzyme';
import ImageIcon from '..';
import toJson from 'enzyme-to-json';

describe('Icon', () => {
  it('should render Icon components', () => {
    const wrapper = render(
      <>
        <ImageIcon path={'test.png'} width="80" height="80" />
        <ImageIcon path={'test.png'} width="80" height="80" onClick={() => {}} />
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
