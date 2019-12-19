import React, { MouseEventHandler, FC, CSSProperties } from 'react';
import cls from 'classnames';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}button`,
  up: false,
  down: false,
  actived: false,
  disabled: false,
};

export interface ButtonProps {
  /** 是否显示左边箭头
   *
   * @default false
   */
  up?: boolean;
  /** 是否显示右边箭头
   *
   * @default false
   */
  down?: boolean;
  /** 是否激活
   *
   * @default false
   */
  actived?: boolean;
  /** 是否禁用
   *
   * @default false
   */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  prefixCls,
  up, // 左箭头
  down, // 右箭头
  actived, // 按钮激活
  disabled, // 按钮禁用
  onClick: handleClick, // 点击事件
  children,
  className,
  ...rest
}) => (
  <button
    type="button"
    className={cls(
      prefixCls,
      {
        [`${prefixCls}__up`]: up,
        [`${prefixCls}__down`]: down,
        [`${prefixCls}__actived`]: actived,
      },
      className,
    )}
    disabled={disabled}
    onClick={e => handleClick && !disabled && handleClick(e)}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = defaultProps;

export default Button;
