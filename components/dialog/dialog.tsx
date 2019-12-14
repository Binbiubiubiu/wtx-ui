import React, { FC, ReactNode, MouseEventHandler, CSSProperties } from 'react';
import cls from 'classnames';
import ImageIcon from '../icon';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}dialog`,
  theme: 'dark' as 'dark' | 'light',
};

export interface DialogProps {
  /**
   * 弹窗的主题
   *
   * @default "dark"
   */
  theme?: 'dark' | 'light';
  /**
   *  弹窗的图标
   */
  titleIcon?: ReactNode;
  /**
   *  弹窗标题
   */
  title: string | ReactNode;
  /**
   *  弹窗顶部补充部分
   */
  headerExpandRender?: () => ReactNode;
  /** 弹窗关闭回调 */
  onClose?: MouseEventHandler<Element>;
  /** 弹窗最小化回调 */
  onMinimize?: MouseEventHandler<Element>;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const Dialog: FC<DialogProps> = ({
  prefixCls,
  theme,
  titleIcon,
  title,
  onClose,
  onMinimize,
  headerExpandRender,
  className,
  children,
  ...rest
}) => {
  // (titleIcon as { path: "" }).path = "";

  return (
    <section className={cls(`${prefixCls}__theme-${theme}`, className)} {...rest}>
      <div className={`${prefixCls}__header`}>
        {titleIcon && titleIcon}
        <span className={`${prefixCls}__title`}>{title}</span>
        <div className={`${prefixCls}__expand`}>{headerExpandRender && headerExpandRender()}</div>
        {onClose && (
          <ImageIcon path="/assets/close-icon.png" width="18" height="18" onClick={onClose} />
        )}
        {onMinimize && (
          <ImageIcon path="/assets/minimize-icon.png" width="18" height="18" onClick={onMinimize} />
        )}
      </div>
      <div className={`${prefixCls}__content`}>{children}</div>
    </section>
  );
};

Dialog.defaultProps = defaultProps;

export default Dialog;
