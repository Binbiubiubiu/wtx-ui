import React, { FC, CSSProperties } from 'react';
import cls from 'classnames';

import { prefixlib } from '../_util/constants';

type AlignType = 'top' | 'middle' | 'bottom';
type JustifyType = 'start' | 'center' | 'end' | 'space-between' | 'space-around';

const defaultProps = {
  prefixCls: `${prefixlib}row`,
  align: 'top' as 'top' | 'middle' | 'bottom',
  justify: 'start' as JustifyType,
  gutter: 0,
};

export interface RowProps {
  /** 垂直对齐方式
   *
   * @default "top"
   */
  align?: AlignType;
  /** 水平排列方式
   *
   * @default "start"
   */
  justify?: JustifyType;
  /** 水平间隔
   *
   * @default 0
   */
  gutter?: number | string;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const Row: FC<RowProps> = ({
  prefixCls,
  align,
  justify,
  gutter,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cls(
        prefixCls,
        `${prefixCls}-flex-${align}`,
        `${prefixCls}-flex-${justify}`,
        className,
      )}
      {...rest}
    >
      {gutter
        ? React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: { margin: `0 ${+gutter / 2}` },
            }),
          )
        : children}
    </div>
  );
};

Row.defaultProps = defaultProps;

export default Row;
