import React, { FC, CSSProperties } from 'react';
import { ReactSVG } from 'react-svg';

const defaultProps = {
  icon: 'bars',
};

export type LoadingProps = {
  /**
   * 加载类型
   *
   * @default bars
   */
  icon?: string;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
};

export const Loading: FC<LoadingProps> = props => {
  const { icon, ...rest } = props;

  return <ReactSVG src={require(`./loading-${icon}.svg`) as string} {...rest} />;
};

Loading.defaultProps = defaultProps;

export default Loading;
