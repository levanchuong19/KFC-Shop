import React from "react";
import DashboardTemplate, {
  Column,
} from "../../../components/dashboard-template";
import { Form, Input } from "antd";

function ManageCategory() {
  const columns: Column[] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  const formItems = (
    <>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
    </>
  );

  return (
    <DashboardTemplate
      columns={columns}
      apiURI="category"
      formItems={formItems}
    />
  );
}

export default ManageCategory;
