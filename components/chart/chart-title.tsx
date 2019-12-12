import React, { FC } from 'react';

export interface ChartTitleProps {
  /** 图表标题 */
  title: string;
  /** 图表总计 */
  number: string | number;
}

export const ChartTitle: FC<ChartTitleProps> = props => {
  const { title, number, ...rest } = props;
  return (
    <div className="chart-title" {...rest}>
      {title}
      {number ? <div className="number">{number}</div> : null}
    </div>
  );
};

export default ChartTitle;
