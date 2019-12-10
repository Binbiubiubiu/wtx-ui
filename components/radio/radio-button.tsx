import React, { FC } from "react";
import classnames from "classnames";
import "./style";
import RadioGroup, { RadioGroupProps } from "./radio-group";

const defaultProps = {
  disabled: false
};

export interface RadioButtonProps {
  /** 单选标签 */
  label?: string;
  /** 是否禁用
   *
   *  @default false
   */
  disabled?: boolean;
  /** 原生name属性 */
  name?: string;
  [props: string]: any;
}

export const RadioButton: FC<RadioButtonProps> & {
  Group: FC<RadioGroupProps>;
} = props => {
  const { checked, name, label, disabled, onChecked, children } = props;

  return (
    <label
      className={classnames("za-radio-button", {
        "za-radio-button__checked": checked === label
      })}
    >
      <input
        className="za-radio-button__input"
        value={label}
        type="radio"
        name={name}
        disabled={disabled}
        onChange={e => {
          onChecked(e.target.value);
        }}
      />
      {children || label}
    </label>
  );
};

RadioButton.defaultProps = defaultProps;

RadioButton.Group = RadioGroup;

export default RadioButton;
