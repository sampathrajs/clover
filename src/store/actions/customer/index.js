import {
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "../../selectors/customer";

export const pushCustomer = (dispatch, data) => {
  dispatch({
    type: SAVE_CUSTOMER,
    payload: data,
  });
};
export const removeCustomer = (dispatch, id) => {
  dispatch({
    type: DELETE_CUSTOMER,
    payload: id,
  });
};
export const editCustomer = (dispatch, data) => {
  dispatch({
    type: EDIT_CUSTOMER,
    payload: data,
  });
};
