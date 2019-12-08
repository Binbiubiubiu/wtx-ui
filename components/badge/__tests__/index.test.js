import React from "react";
import { render, shallow } from "enzyme";
import Button from "..";

describe("<Button />", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Button>你好</Button>
        <Button >你好</Button>
      </div>
    );
  });
});
