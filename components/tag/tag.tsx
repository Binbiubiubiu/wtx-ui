import React, { FC, CSSProperties } from 'react';
import cls from 'classnames';

import { prefixlib } from '../_util/constants';

type TagType = 'ok' | 'error' | 'danger' | 'warning' | 'disabled' | 'online' | 'outline';

const defaultProps = {
  prefixCls: `${prefixlib}tag`,
  radius: false,
};

export type TagProps = {
  /**
   * 图标类型
   * (
   * ok：正常,
   * error：异常,
   * danger：危险,
   * warning：警告,
   * disabled：警用,
   * online：在线,
   * outline：离线,
   * )
   *
   * @default default
   */
  type?: TagType;
  /**
   * 是否圆角
   *
   * @default false
   *  */
  radius?: boolean;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
};

export const Tag: FC<TagProps> = props => {
  const { prefixCls, type, radius, className, children } = props;
  return (
    <div
      className={cls(
        prefixCls,
        { [`${prefixCls}__radius`]: radius },
        type ? `${prefixCls}__${type}` : null,
        className,
      )}
    >
      {children}
    </div>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
