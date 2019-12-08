import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "..";

describe("<Button />", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Button>默认</Button>
        <Button key="up" up>
          上一页
        </Button>
        <Button key="down" down>
          下一页
        </Button>
        <Button disabled>禁用按钮</Button>
        <Button actived>激活按钮</Button>
      </div>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
