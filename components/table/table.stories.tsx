import React from "react";
// import { action } from "@storybook/addon-actions";
import InfiniteTable, { Column } from ".";
import { px2px } from "../_util/viewports";

export default {
  title: "公共组件|表格"
};

export const 默认 = () => (
  <div style={{ width: 400, height: 276 }}>
    <InfiniteTable height={300} headerHeight={20} rowHeight={40}>
      <Column
        label="登记时间"
        dataKey="time"
        width={px2px(100)}
        cellRenderer={({ cellData }) => (
          <span>
            {cellData ? cellData.substr(6) : ""}
            <br />
            {cellData ? cellData.substr(0, 5) : ""}
          </span>
        )}
      />
      <Column label="访客姓名" dataKey="name" flexGrow={1} width={0} />
      <Column label="性别" dataKey="sex" width={px2px(60)} />
      <Column label="联系电话" dataKey="phone" width={px2px(158)} />
      <Column label="去访小区" dataKey="house" flexGrow={1} width={0} />
    </InfiniteTable>
  </div>
);
