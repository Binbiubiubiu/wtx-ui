import React, { FC } from "react";
import Select, { SelectProps } from "rc-select";
import "./style";

const ISelect: FC<SelectProps> = props => {
  const { children, ...rest } = props;
  return <Select {...rest}>{children}</Select>;
};

export default ISelect;
