import React from "react";
import { shallow } from "enzyme";
import PlantCard from "./PlantCard";

describe("PlantCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlantCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
