import React, { Component, CSSProperties } from 'react';
import echarts, { ECharts, EChartOption } from '../_lib/echarts';

export interface LineChartProps {
  /**
   * x轴
   */
  xaxis: any[];
  /**
   * y轴
   */
  yaxis: any[];
  /**
   *  图表的标签
   */
  tags?: string[];
  /** 自定义class */
  className?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export class LineChart extends Component<LineChartProps> {
  chartRef: React.RefObject<HTMLDivElement>;

  chart?: ECharts;

  constructor(props: LineChartProps) {
    super(props);

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { xaxis, yaxis, tags } = this.props;

    this.chart = echarts.init(this.chartRef.current as HTMLDivElement);
    const options = getOptions(xaxis, yaxis, tags);
    this.chart.setOption(options);
  }

  render() {
    const { ...rest } = this.props;

    return <div ref={this.chartRef} {...rest} />;
  }
}

export default LineChart;

const getOptions: (x: string[], y: any, tags?: string[]) => EChartOption = (
  xAxis,
  yAxis,
  tags = [],
) => {
  const areaColor = ['rgba(51,211,51,.4)', 'rgba(254,10,183,.4)'];
  return {
    color: ['#33D333', '#FE0AB7'],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis,
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
      },
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
      },
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        },
      },
    },
    legend: {
      show: tags.length > 0,
      data: tags,
      bottom: 0,
      textStyle: {
        color: '#fff',
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    grid: {
      x: 40,
      y: 14,
      x2: 20,
      y2: tags.length > 0 ? 44 : 24,
      borderWidth: 10,
    },
    series: yAxis.map((it: string, i: number) => ({
      name: tags[i],
      data: it,
      type: 'line',
      symbolSize: 10,
      symbol: 'circle',
      hoverAnimation: false,
      areaStyle: {
        normal: {
          color: areaColor[i],
        },
      },
    })),
  };
};
