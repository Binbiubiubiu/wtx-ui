import React, { FC, CSSProperties } from 'react';
import cls from 'classnames';
import RadioGroup, { RadioGroupProps } from './radio-group';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}radio`,
  disabled: false,
};

export interface RadioProps {
  /** 单选组选中项 */
  checked?: string | number;
  /** 单选标签 */
  label?: string;
  /** 是否禁用
   *
   *  @default false
   */
  disabled?: boolean;
  /** 选中回调事件 */
  onChecked?: (value: string) => void;
  /** 原生name属性 */
  name?: string;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const Radio: FC<RadioProps> & { Group: FC<RadioGroupProps> } = ({
  prefixCls,
  checked,
  name,
  label,
  disabled,
  onChecked,
  children,
  className,
  ...rest
}) => {
  return (
    <label
      className={cls(
        prefixCls,
        {
          [`${prefixCls}__checked`]: checked === label,
        },
        className,
      )}
      {...rest}
    >
      <input
        className={`${prefixCls}__input`}
        value={label}
        type="radio"
        name={name}
        disabled={disabled}
        onChange={e => {
          onChecked && onChecked(e.target.value);
        }}
      />
      {children || label}
    </label>
  );
};

Radio.defaultProps = defaultProps;

Radio.Group = RadioGroup;

export default Radio;
