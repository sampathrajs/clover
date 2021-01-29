import React from "react";
import { pushCustomer, editCustomer } from "../../store/actions/customer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { RouteComponentProps } from "react-router-dom";
import { AppState } from "../../store/reducer";
import { CustomerModel } from "../../model/customer";
import CustomerForm from "../form";

interface CustomerParams {
  id: string; // parameters will always be a string (even if they are numerical)
}
interface CustomerComponentProps extends RouteComponentProps<CustomerParams> {
  /* other props for ChildComponent */
}

const initialValue: CustomerModel = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  skill: [],
  gender: "",
};

const AddCustomer: React.FC<CustomerComponentProps> = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const customers: CustomerModel[] = useSelector(
    (state: AppState) => state.customer.customers
  );
  const formvalue: any = isAddMode
    ? initialValue
    : customers.find((customer) => customer.id === id);
  const dispatch = useDispatch();
  const onFinish = (values: CustomerModel) => {
    if (isAddMode) {
      values.id = uuidv4();
      dispatch(pushCustomer(values));
    } else {
      values.id = id;
      dispatch(editCustomer(values));
    }
    history.push("/");
  };
  return (
    <Card>
      <CardContent>
        <CustomerForm onFinish={onFinish} formvalue={formvalue} />
      </CardContent>
    </Card>
  );
};

export default AddCustomer;
