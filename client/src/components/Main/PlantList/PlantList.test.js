import React from "react";
import { shallow } from "enzyme";
import PlantList from "./PlantList";

describe("PlantList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlantList />);
    expect(wrapper).toMatchSnapshot();
  });
});
