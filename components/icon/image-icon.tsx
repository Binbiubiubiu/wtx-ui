import React, { FC, MouseEventHandler, CSSProperties } from "react";
import cls from "classnames";

import { prefixlib } from "../_util/constants";

const defaultProps = {
  prefixCls: `${prefixlib}image-icon`,
  width: 40,
  height: 40
};

export interface ImageIconProps {
  /** 图标路径 */
  path: string;
  /** 图标宽度
   *
   * @default 40px
   */
  width: number | string;
  /** 图标高度
   *
   * @default 40px
   */
  height: number | string;
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLImageElement>;
  /** 原生 title属性 */
  title?: string;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const ImageIcon: FC<ImageIconProps> = props => {
  const {
    prefixCls,
    path,
    width,
    height,
    onClick,
    className,
    style,
    ...rest
  } = props;

  const IconCls = cls(
    prefixCls,
    { [`${prefixCls}__clickable`]: !!onClick },
    className
  );

  return (
    <img
      src={path}
      style={{ ...style, width, height }}
      className={IconCls}
      onClick={onClick}
      {...rest}
      alt=""
    />
  );
};

ImageIcon.defaultProps = defaultProps;

export default ImageIcon;
