import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";

const initialState = {
  customers: [],
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
