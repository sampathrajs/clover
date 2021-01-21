import React from "react";
import { pushCustomer, editCustomer } from "../../store/actions/customer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValue = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  skill: ["react"],
  gender: "",
};

const validationSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  gender: Yup.string().required("Required"),
});
const AddCustomer = ({ history, match }) => {
  const { id } = match.params;
  const isAddMode = !id;
  const customers = useSelector((state) => state.customer.customers);
  const formvalue = isAddMode
    ? initialValue
    : customers.find((customer) => customer.id === id);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    if (isAddMode) {
      values.id = uuidv4();
      pushCustomer(dispatch, values);
    } else {
      values.id = id;
      editCustomer(dispatch, values);
    }
    history.push("/");
  };
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={formvalue}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            onFinish(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div>
              <div>
                <label htmlFor="firstname">First Name</label>
                <Field name="firstname" type="text" />
                <ErrorMessage name="firstname" />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <Field name="lastname" type="text" />
                <ErrorMessage name="lastname" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>

              <div role="group" aria-labelledby="checkbox-group">
                <label htmlFor="skill">Skill</label>
                <label>
                  <Field type="checkbox" name="skill" value="angular" />
                  Angular
                </label>
                <label>
                  <Field type="checkbox" name="skill" value="react" />
                  React
                </label>
                <label>
                  <Field type="checkbox" name="skill" value="java" />
                  Java
                </label>
                <ErrorMessage name="skill" />
              </div>
              <label htmlFor="gender">Gender</label>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
                <ErrorMessage name="gender" />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit">
                  SAVE
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default AddCustomer;
