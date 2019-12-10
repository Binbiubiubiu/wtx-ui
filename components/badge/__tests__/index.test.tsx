import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Badge from "..";

describe("<Badge />", () => {
  it("should render a <Badge/> components", () => {
    const wrapper = render(
      <div>
        <Badge>默认</Badge>
      </div>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
