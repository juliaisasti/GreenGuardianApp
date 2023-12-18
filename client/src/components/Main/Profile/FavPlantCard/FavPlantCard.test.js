import React from "react";
import { shallow } from "enzyme";
import FavPlantCard from "./FavPlantCard";

describe("FavPlantCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FavPlantCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
