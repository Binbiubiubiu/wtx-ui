import React, { FC, CSSProperties } from 'react';
import cls from 'classnames';
import RadioGroup, { RadioGroupProps } from './radio-group';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}radio-button`,
  disabled: false,
  checked: false,
};

export interface RadioButtonProps {
  /** 单选标签 */
  label?: string;
  /** 是否禁用
   *
   *  @default false
   */
  checked?: boolean;
  /** 是否禁用
   *
   *  @default false
   */
  disabled?: boolean;
  /** 选中回调函数 */
  onChecked?: (val: string) => void;
  /** 原生name属性 */
  name?: string;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

export const RadioButton: FC<RadioButtonProps> & {
  Group: FC<RadioGroupProps>;
} = ({ prefixCls, checked, name, label, disabled, onChecked, children, ...rest }) => {
  const radioBtnCls = cls(prefixCls, {
    [`${prefixCls}__checked`]: checked === label,
  });

  return (
    <label className={radioBtnCls} {...rest}>
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

RadioButton.defaultProps = defaultProps;

RadioButton.Group = RadioGroup;

export default RadioButton;
