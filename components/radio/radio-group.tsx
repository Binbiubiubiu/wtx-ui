import React, { FC, useState, useEffect, CSSProperties } from 'react';
import cls from 'classnames';
import { randomString } from '../_util/viewports';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}radio-group`,
};

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

export const RadioGroup: FC<RadioGroupProps> = ({
  prefixCls,
  value,
  onChange,
  children,
  className,
  ...rest
}) => {
  const [checked, setChecked] = useState<typeof value>(value);
  const [randomName] = useState(randomString(8));

  useEffect(() => {
    onChange && onChange(checked);
    // eslint-disable-next-line
  }, [checked]);

  return (
    <div className={cls(prefixCls, className)} {...rest}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          onChecked: (val: typeof value) => setChecked(val),
          checked,
          name: child.props.name || randomName,
        }),
      )}
    </div>
  );
};

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
