import React from "react";

import { shallow } from "enzyme";
import App from "./App";

it("renders correctly enzyme", () => {
  const wrapper = shallow(<App>test</App>);
  expect(wrapper.exists()).toBe(true);
});
