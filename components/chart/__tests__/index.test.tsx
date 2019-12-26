import React from 'react';
import { render } from 'enzyme';
import { PieChart, LineChart, RadarChart, ChartTitle } from '..';
import toJson from 'enzyme-to-json';

describe('Chart', () => {
  it('should render charts components', () => {
    const wrapper = render(
      <>
        <PieChart
          data={[
            { name: '可视化烟感', value: 234 },
            { name: 'type2', value: 134 },
            { name: 'type3', value: 204 },
            { name: 'type4', value: 134 },
          ]}
          className="test"
          style={{ width: 400, height: 240 }}
        />
        <LineChart
          xaxis={['11.1', '11.2', '11.3', '11.4', '11.5', '11.6', '11.7']}
          yaxis={[[200, 189, 120, 165, 145, 209, 192]]}
          style={{
            width: 400,
            height: 190,
          }}
        />
        <LineChart
          xaxis={['11.1', '11.2', '11.3', '11.4', '11.5', '11.6', '11.7']}
          yaxis={[
            [200, 189, 120, 165, 145, 209, 192],
            [191, 289, 320, 165, 245, 109, 92],
          ]}
          tags={['第一类型', '第二类型']}
          className="test"
          style={{
            width: 400,
            height: 190,
          }}
        />
        <RadarChart
          data={[
            {
              name: '智能气感(53)',
              value: 20,
            },
            {
              name: '水压液位监测(30)',
              value: 30,
            },
            {
              name: '智能消火栓(15)',
              value: 22,
            },
            {
              name: '智慧用电(42)',
              value: 50,
            },
            {
              name: '智能烟感(142)',
              value: 12,
            },
          ]}
          style={{
            width: 400,
            height: 160,
          }}
        />
        <ChartTitle title="标题" number={0} />
        <ChartTitle title="标题" number={7} />
      </>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
