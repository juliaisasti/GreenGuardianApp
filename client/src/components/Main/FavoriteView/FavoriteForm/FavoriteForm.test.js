import React from "react";
import { shallow } from "enzyme";
import FavoriteForm from "./FavoriteForm";

describe("FavoriteForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FavoriteForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
