import React from "react";
import Badge from "../components/badge";
import "../components/badge/style";

export default {
  title: "公共组件|标签"
};

export const 默认 = () => <Badge>默认标签</Badge>;

export const 圆角 = () => <Badge radius>圆角标签</Badge>;

export const 正常 = () => (
  <Badge type="ok" radius>
    正常
  </Badge>
);

export const 异常 = () => (
  <Badge type="error" radius>
    异常
  </Badge>
);

export const 警告 = () => (
  <Badge type="warning" radius>
    警告
  </Badge>
);

export const 禁用 = () => (
  <Badge type="disabled" radius>
    禁用
  </Badge>
);

export const 在线 = () => (
  <Badge type="online" radius>
    在线
  </Badge>
);

export const 离线 = () => (
  <Badge type="outline" radius>
    离线
  </Badge>
);
