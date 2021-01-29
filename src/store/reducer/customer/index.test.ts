import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";

import { CustomerReducer } from "./index";

describe("customer reducer", () => {
  it("should return the initial state", () => {
    expect(CustomerReducer(undefined, {})).toEqual({
      customers: [],
    });
  });

  it("should return the additional state", () => {
    const customer = {
      id: "1",
      firstname: "sam",
      lastname: "raj",
      email: "sam@gmail.com",
      skill: ["test"],
      gender: "male",
    };
    expect(
      CustomerReducer(undefined, {
        type: SAVE_CUSTOMER,
        payload: customer,
      })
    ).toEqual({
      customers: [
        {
          id: "1",
          firstname: "sam",
          lastname: "raj",
          email: "sam@gmail.com",
          skill: ["test"],
          gender: "male",
        },
      ],
    });
  });

  it("should return the updated state", () => {
    const customer = {
      id: "1",
      firstname: "sampath",
      lastname: "raj",
      email: "sam@gmail.com",
      skill: ["test"],
      gender: "male",
    };
    expect(
      CustomerReducer(
        {
          customers: [
            {
              id: "1",
              firstname: "sam",
              lastname: "raj",
              email: "sam@gmail.com",
              skill: ["test"],
              gender: "male",
            },
          ],
        },
        {
          type: EDIT_CUSTOMER,
          payload: customer,
        }
      )
    ).toEqual({
      customers: [customer],
    });
  });
  it("should return the empty state", () => {
    const customer = {
      id: "1",
      firstname: "sampath",
      lastname: "raj",
      email: "sam@gmail.com",
      skill: ["test"],
      gender: "male",
    };
    expect(
      CustomerReducer(
        {
          customers: [customer],
        },
        {
          type: DELETE_CUSTOMER,
          payload: "1",
        }
      )
    ).toEqual({
      customers: [],
    });
  });
});
