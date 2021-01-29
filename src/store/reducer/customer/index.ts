import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";
import { CustomerModel } from "../../../model/customer";

interface CustomerState {
  customers: CustomerModel[];
}
const initialState: CustomerState = {
  customers: [],
};

type Action =
  | { type: typeof SAVE_CUSTOMER; payload: CustomerModel }
  | { type: typeof EDIT_CUSTOMER; payload: CustomerModel }
  | { type: typeof DELETE_CUSTOMER; payload: string };

export const CustomerReducer = (
  state = initialState,
  action: Action
): CustomerState => {
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
