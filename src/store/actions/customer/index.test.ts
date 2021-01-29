import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";

import * as actions from "./index";

describe("actions", () => {
  const customer = {
    id: "1",
    firstname: "sam",
    lastname: "raj",
    email: "sam@gmail.com",
    skill: ["test"],
    gender: "male",
  };
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: SAVE_CUSTOMER,
      payload: customer,
    };
    expect(actions.pushCustomer(customer)).toEqual(expectedAction);
  });
  it("should edit an action to add a todo", () => {
    const expectedAction = {
      type: EDIT_CUSTOMER,
      payload: customer,
    };
    expect(actions.editCustomer(customer)).toEqual(expectedAction);
  });
  it("should delete an action to add a todo", () => {
    const expectedAction = {
      type: DELETE_CUSTOMER,
      payload: "1",
    };
    expect(actions.removeCustomer("1")).toEqual(expectedAction);
  });
});
