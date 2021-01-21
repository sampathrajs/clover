import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  customers: [
    {
      id: uuidv4(),
      firstname: "sam",
      lastname: "raj",
      email: "sam@gmli.com",
      skill: "angular",
      gender: "male",
    },
  ],
};

export const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case EDIT_CUSTOMER:
      let newArray = [...state.customers];
      let index = newArray.findIndex(
        (element) => element.id === action.payload.id
      );
      newArray[index] = action.payload;
      return {
        ...state,
        customers: [...newArray],
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
