import React, { Component, CSSProperties } from 'react';
import echarts, { ECharts, EChartOption } from '../_lib/echarts';

export interface PieChartProps {
  /**
   * 数据
   */
  data: any[];
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
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

    this.chart = echarts.init(this.chartRef.current!);
    const options = getOptions(data);
    this.chart.setOption(options);
  }

  render() {
    const { style } = this.props;

    return <div ref={this.chartRef} style={style} />;
  }
}

export default PieChart;

const getOptions: (data: any) => EChartOption = dataList => ({
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
      data: dataList.map((item: any) => ({
        value: item.count,
        name: item.name,
      })),
    },
  ],
});
