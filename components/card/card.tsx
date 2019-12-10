import React, { FC, CSSProperties, ReactNode } from "react";
import cls from "classnames";

import { prefixlib } from "../_util/constants";

const defaultProps = {
  prefixCls: `${prefixlib}card`
};

export interface CardProps {
  /** 卡片图标 */
  icon: ReactNode;
  /** 卡片标题 */
  title: string | ReactNode;
  /** 卡片数字 */
  content: string | number | ReactNode;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const Card: FC<CardProps> = props => {
  const { prefixCls, icon, title, content, className, ...rest } = props;
  const contentCls = cls({
    "led-num": !isNaN(+content!)
  });

  return (
    <div className={cls(prefixCls, className)} {...rest}>
      {icon}
      <dl className={`${prefixCls}__body`}>
        <dt className={`${prefixCls}__title`}>{title}</dt>
        <dd className={`${prefixCls}__content`}>
          {React.isValidElement(content) ? (
            content
          ) : (
            <span className={contentCls}>{content}</span>
          )}
        </dd>
      </dl>
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
