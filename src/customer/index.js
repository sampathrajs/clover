import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Popconfirm, Table, Button } from "antd";
import { removeCustomer } from "../store/actions/customer";

const Customer = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    removeCustomer(dispatch, id);
  };
  const handleAdd = () => {
    props.history.push("/add");
  };
  const handleEdit = (id) => {
    props.history.push(`/edit/${id}`);
  };
  const columns = [
    {
      title: "Name",
      render: (record) => record.firstName,
    },
    {
      title: "Last Name",
      render: (record) => record.lastName,
    },
    {
      title: "Email",
      render: (record) => record.email,
    },
    {
      title: "Skills",
      render: (record) => record.skill.toString(),
    },
    {
      title: "Gender",
      render: (record) => record.gender,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => (
        <Button onClick={() => handleEdit(record.id)}>Edit</Button>
      ),
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.id)}
        >
          <Button>Delete</Button>
        </Popconfirm>
      ),
    },
  ];
  const customers = useSelector((state) => state.customer.customers);
  return (
    <Layout className="site-layout">
      <div>
        <Button
          onClick={() => handleAdd()}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table columns={columns} dataSource={customers} />
      </div>
    </Layout>
  );
};

export default Customer;
