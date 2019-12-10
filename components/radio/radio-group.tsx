import React, { FC, useState, useEffect, CSSProperties } from "react";
import { randomString } from "../_util/viewports";
import "./style";

export interface RadioGroupProps {
  /** 单选组选中的值 */
  value: string | number;
  /** 单选组变化监听 */
  onChange?: (val: string | number) => void;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const { value, onChange, children, ...rest } = props;
  const [checked, setChecked] = useState<typeof value>(value);
  const [randomName] = useState(randomString(8));

  useEffect(() => {
    onChange && onChange(checked);
    // eslint-disable-next-line
  }, [checked]);

  return (
    <div className="za-radio-group" {...rest}>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          onChecked: (val: typeof value) => setChecked(val),
          checked,
          name: child.props.name || randomName
        });
      })}
    </div>
  );
};

export default RadioGroup;
