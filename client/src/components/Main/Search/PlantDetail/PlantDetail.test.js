import React from "react";
import { shallow } from "enzyme";
import PlantDetail from "./PlantDetail";

describe("PlantDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlantDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
