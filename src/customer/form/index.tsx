import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { CustomerModel } from "../../model/customer";

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
interface CustomerFormProps {
  formvalue: CustomerModel;
  onFinish(arg: CustomerModel): void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onFinish, formvalue }) => {
  return (
    <Formik
      initialValues={formvalue}
      validationSchema={validationSchema}
      onSubmit={(values: CustomerModel) => {
        onFinish(values);
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
  );
};
export default CustomerForm;
