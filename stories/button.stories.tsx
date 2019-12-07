import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button";

export default {
  title: "公共组件|按钮"
};

export const 默认 = () => <Button onClick={action("clicked")}>默认按钮</Button>;

export const 带箭头 = () => (
  <div>
    <Button style={{ marginRight: 20 }} key="up" up>
      上一页
    </Button>
    <Button key="down" down>
      下一页
    </Button>
  </div>
);

export const 禁用 = () => <Button disabled>禁用按钮</Button>;

export const 激活 = () => <Button actived>激活按钮</Button>;
