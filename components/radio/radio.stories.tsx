import React from "react";
import { Radio, RadioButton } from ".";
import ImageIcon from "../icon";

export default {
  title: "公共组件|单选"
};

export const 默认 = () => (
  <div>
    <Radio.Group value="苹果">
      <Radio label="苹果" />
      <Radio label="香蕉" />
      <Radio label="西瓜" />
    </Radio.Group>
  </div>
);

export const 单选按钮 = () => (
  <RadioButton.Group value="图表">
    <RadioButton label="图表">
      <ImageIcon
        className="m-r-10"
        path="/assets/radio-icons/icon-chart.png"
        width="14"
        height="14"
      />
      图表
    </RadioButton>
    <RadioButton label="列表">
      <ImageIcon
        className="m-r-10"
        path="/assets/radio-icons/icon-list.png"
        width="14"
        height="14"
      />
      列表
    </RadioButton>
  </RadioButton.Group>
);
