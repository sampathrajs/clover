import React from "react";

import { shallow } from "enzyme";
import App from "./App";

it("renders correctly enzyme", () => {
  const wrapper = shallow(
    <App>
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    </App>
  );
  expect(wrapper.find("h1").html()).toMatch(/Hello, Enzyme/);
});
