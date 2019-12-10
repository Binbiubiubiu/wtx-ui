import React, { FC } from "react";
import classnames from "classnames";
import "./style/row.scss";
import { px2rem } from "../_util/viewports";

type AlignType = "top" | "middle" | "bottom";
type JustifyType =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around";

const defaultProps = {
  align: "top" as AlignType,
  justify: "start" as JustifyType,
  gutter: 0
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
  [props: string]: any;
}

export const Row: FC<RowProps> = props => {
  const { align, justify, gutter, children, ...rest } = props;

  return (
    <div
      className={classnames(
        "za-row",
        `za-row-flex-${align}`,
        `za-row-flex-${justify}`
      )}
      {...rest}
    >
      {gutter
        ? React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: { margin: `0 ${px2rem(+gutter / 2)}rem` }
            })
          )
        : children}
    </div>
  );
};

Row.defaultProps = defaultProps;

export default Row;
