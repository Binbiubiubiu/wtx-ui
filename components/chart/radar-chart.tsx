import React, { Component, createRef } from 'react';
import echarts, { ECharts, EChartOption } from '../_lib/echarts';

export interface RadarChartProps {
  /**
   * 数据
   */
  data: any[];
  [props: string]: any;
}

export class RadarChart extends Component<RadarChartProps> {
  chartRef: React.RefObject<HTMLDivElement>;

  chart?: ECharts;

  constructor(props: RadarChartProps) {
    super(props);

    this.chartRef = createRef();
  }

  componentDidMount() {
    const { data } = this.props;

    this.chart = echarts.init(this.chartRef.current as HTMLDivElement);
    const options = getOptions(data);
    this.chart.setOption(options);
  }

  render() {
    const { style } = this.props;

    return <div ref={this.chartRef} style={style} />;
  }
}

export default RadarChart;

const getOptions: (data: any) => EChartOption = data => {
  const color = ['#6ee245', '#d3ad2b', '#2bd3cd', '#d32bcd', '#ec7b37'];

  let max = data[0].value;
  data.forEach((d: any) => {
    max = d.value > max ? d.value : max;
  });

  max = max > 0 ? max : 10;

  const renderData: any = [
    {
      value: [],
      name: '告警类型TOP5',
      symbol: 'none',
      lineStyle: {
        normal: {
          color: '#33D332',
          width: 1,
        },
      },
      areaStyle: {
        normal: {
          color: 'rgba(51,211,51,.4)',
        },
      },
    },
  ];

  data.forEach((d: any, i: number) => {
    const value = ['', '', '', '', ''];
    value[i] = max;
    renderData[0].value[i] = d.value;
    renderData.push({
      value,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        normal: {
          color: 'transparent',
        },
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
    });
  });
  const indicator: any = [];

  data.forEach((d: any) => {
    indicator.push({
      name: d.name,
      max,
      color: '#fff',
    });
  });

  return {
    tooltip: {
      show: false,
      trigger: 'item',
    },
    radar: {
      center: ['50%', '50%'],
      radius: '65%',
      startAngle: 90, // 起始角度
      splitNumber: 4,
      shape: 'circle',
      splitArea: {
        areaStyle: {
          color: 'transparent',
        },
      },
      name: {
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      },
      nameGap: 6,
      axisLabel: {
        show: false,
        fontSize: 20,
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#53C0EC',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#53C0EC',
        },
      },
      indicator,
    },
    series: [
      {
        type: 'radar',
        data: renderData,
      },
    ],
  };
};
