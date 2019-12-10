import React, { FC, ReactNode, MouseEventHandler } from "react";
import classnames from "classnames";
import "./style/dialog.scss";
import ImageIcon from "../icon";

const defaultProps = {
  theme: "dark" as "dark" | "light"
};

export interface DialogProps {
  /**
   * 弹窗的主题
   *
   * @default "dark"
   */
  theme?: "dark" | "light";
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
  [props: string]: any;
}

export const Dialog: FC<DialogProps> = props => {
  const {
    theme,
    titleIcon,
    title,
    onClose,
    onMinimize,
    headerExpandRender,
    className,
    children,
    ...rest
  } = props;
  // (titleIcon as { path: "" }).path = "";

  return (
    <section
      className={classnames(`za-dialog__theme-${theme}`, className)}
      {...rest}
    >
      <div className="za-dialog__header">
        {titleIcon && titleIcon}
        <span className="za-dialog__title">{title}</span>
        <div className="za-dialog__expand">
          {headerExpandRender && headerExpandRender()}
        </div>
        {onClose && (
          <ImageIcon
            path="/assets/dialog/close-icon.png"
            width="18"
            height="18"
            onClick={onClose}
          />
        )}
        {onMinimize && (
          <ImageIcon
            path="/assets/dialog/minimize-icon.png"
            width="18"
            height="18"
            onClick={onMinimize}
          />
        )}
      </div>
      <div className="za-dialog__content">{children}</div>
    </section>
  );
};

Dialog.defaultProps = defaultProps;

export default Dialog;
