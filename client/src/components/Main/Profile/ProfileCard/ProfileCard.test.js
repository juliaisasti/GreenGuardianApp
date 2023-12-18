import React from "react";
import { shallow } from "enzyme";
import ProfileCard from "./ProfileCard";

describe("ProfileCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
