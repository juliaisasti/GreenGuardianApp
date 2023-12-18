import React from "react";
import { shallow } from "enzyme";
import Description from "./Description";

describe("Description", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toMatchSnapshot();
  });
});
