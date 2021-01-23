import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";
import { CustomerModel } from "../../../model/customer";

export const pushCustomer = (data: CustomerModel) => {
  return {
    type: SAVE_CUSTOMER,
    payload: data,
  };
};
export const removeCustomer = (id: string) => {
  return {
    type: DELETE_CUSTOMER,
    payload: id,
  };
};
export const editCustomer = (data: CustomerModel) => {
  return {
    type: EDIT_CUSTOMER,
    payload: data,
  };
};
