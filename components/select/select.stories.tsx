import React from "react";
import Select, { Option } from ".";

export default {
  title: "公共组件|下拉选择"
};

export const 默认 = () => (
  <Select>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);
