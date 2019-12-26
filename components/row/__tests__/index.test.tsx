import React from 'react';
import { render } from 'enzyme';
import Row from '..';
import toJson from 'enzyme-to-json';

describe('Row', () => {
  it('should render Row components', () => {
    const wrapper = render(
      <>
        <Row
          justify="start"
          style={{ width: 230, background: 'rgba(255,255,255,.2)', marginBottom: 20 }}
        >
          <div className="blue">flex-start</div>
          <div className="red"></div>
        </Row>
        <Row
          justify="center"
          style={{ width: 230, background: 'rgba(255,255,255,.2)', marginBottom: 20 }}
        >
          <div className="blue">center</div>
          <div className="red"></div>
        </Row>
        <Row
          justify="end"
          style={{ width: 230, background: 'rgba(255,255,255,.2)', marginBottom: 20 }}
        >
          <div className="blue">flex-end</div>
          <div className="red"></div>
        </Row>
        <Row
          justify="space-between"
          style={{ width: 230, background: 'rgba(255,255,255,.2)', marginBottom: 20 }}
        >
          <div className="blue">space-between</div>
          <div className="red"></div>
        </Row>
        <Row
          justify="space-around"
          style={{ width: 230, background: 'rgba(255,255,255,.2)', marginBottom: 20 }}
        >
          <div className="blue">space-around</div>
          <div className="red"></div>
        </Row>
      </>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
