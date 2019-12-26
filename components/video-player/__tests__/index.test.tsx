import React from 'react';
import { render } from 'enzyme';
import VideoPlayer from '..';
import toJson from 'enzyme-to-json';

describe('VideoPlayer', () => {
  it('should render VideoPlayer components', () => {
    const wrapper = render(
      <>
        <VideoPlayer src="http://meigui.qqqq-kuyun.com/20190406/976_420fc19b/index.m3u8" />
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
