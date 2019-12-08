import React, { FC } from "react";
import cls from "classnames";

const defaultProps = {
  prefixCls: "lv-badge",
  radius: false
};

export type BadgeProps = {
  /**
   * 图标类型
   *
   * ok：正常
   * error：异常
   * danger：危险
   * warning：警告
   * disabled：警用
   * online：在线
   * outline：离线
   */
  type?:
    | "ok"
    | "error"
    | "danger"
    | "warning"
    | "disabled"
    | "online"
    | "outline";
  /** 是否圆角 */
  radius?: boolean;
  [props: string]: any;
};

export const Badge: FC<BadgeProps> = props => {
  const { prefixCls, type, radius, className, children } = props;
  return (
    <div
      className={cls(
        prefixCls,
        { [`${prefixCls}__radius`]: radius },
        type ? `${prefixCls}__${type}` : null,
        className
      )}
    >
      {children}
    </div>
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
