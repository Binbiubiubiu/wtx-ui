import React, { Component, CSSProperties } from 'react';
import echarts, { ECharts, EChartOption } from '../_lib/echarts';

export interface PieChartProps {
  /**
   * 数据
   */
  data: Array<{ name: string; value: number }>;
  /** 自定义class */
  className?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export class PieChart extends Component<PieChartProps> {
  chartRef: React.RefObject<HTMLDivElement>;

  chart?: ECharts;

  constructor(props: PieChartProps) {
    super(props);

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { data } = this.props;

    this.chart = echarts.init(this.chartRef.current as HTMLDivElement);
    const options = getOptions(data);
    this.chart.setOption(options);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, ...rest } = this.props;

    return <div ref={this.chartRef} {...rest} />;
  }
}

export default PieChart;

const getOptions: (data: Array<{ name: string; value: number }>) => EChartOption = dataList => ({
  color: ['#01933F', '#B74D8F', '#E2556A', '#B76767', '#F7C500', '#FFFC9C', '#957F66', '#0F91DD'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '75%',
      center: ['50%', '50%'],
      hoverAnimation: false,
      label: {
        normal: {
          formatter(params: any) {
            return `${params.name}:${params.value}`;
          },
          textStyle: {
            color: '#fff',
            fontSize: 10,
          },
        },
      },
      data: dataList,
    },
  ],
});
