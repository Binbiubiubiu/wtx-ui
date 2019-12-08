import React from "react";
import Tag from "../components/badge";

export default {
  title: "公共组件|标签"
};

export const 默认 = () => <Tag>默认标签</Tag>;

export const 圆角 = () => <Tag radius>圆角标签</Tag>;

export const 正常 = () => (
  <Tag type="ok" radius>
    正常
  </Tag>
);

export const 异常 = () => (
  <Tag type="error" radius>
    异常
  </Tag>
);

export const 警告 = () => (
  <Tag type="warning" radius>
    警告
  </Tag>
);

export const 禁用 = () => (
  <Tag type="disabled" radius>
    禁用
  </Tag>
);

export const 在线 = () => (
  <Tag type="online" radius>
    在线
  </Tag>
);

export const 离线 = () => (
  <Tag type="outline" radius>
    离线
  </Tag>
);
