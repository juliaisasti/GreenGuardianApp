import React from "react";
import { shallow } from "enzyme";
import FavoriteView from "./FavoriteView";

describe("FavoriteView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FavoriteView />);
    expect(wrapper).toMatchSnapshot();
  });
});
