import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Radio, Checkbox } from "antd";
import { pushCustomer, editCustomer } from "../../store/actions/customer";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import { v4 as uuidv4 } from "uuid";

const skills = ["java", "react", "angular"];
const initialValue = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  skill: [],
  gender: "",
};

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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="site-layout">
      <Row>
        <Col span={12} offset={6}>
          <Form
            name="customer"
            initialValues={formvalue}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email !",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Skill"
              name="skill"
              rules={[
                {
                  required: true,
                  message: "Please pick an skill!",
                },
              ]}
            >
              <Checkbox.Group options={skills} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please pick an gender!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female 2</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default AddCustomer;
