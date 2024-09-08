import DashboardTemplate, {
  Column,
} from "../../../components/dashboard-template";
import {Form, Input, InputNumber, Select } from "antd";

function ManageFood() {
  const columns: Column[] = [
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
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text}`, // format the price with a dollar sign
    },
    {
      title: "Category ID",
      dataIndex: "categoryId",
      key: "categoryId",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img src={text} alt="product" style={{ width: "50px" }} />
      ), // display the image
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
      <Form.Item name="price" label="Price">
        <InputNumber />
      </Form.Item>
      <Form.Item name="categoryId" label="Category">
        <Select
          options={[
            { value: 1, label: "Category 1" },
            { value: 2, label: "Category 2" },
            { value: 3, label: "Category 3" },
          ]}
        />
      </Form.Item>
      <Form.Item name="image" label="Image">
        <Input />
      </Form.Item>
    </>
  );

  return (
    <DashboardTemplate
      columns={columns}
      apiURI="product"
      formItems={formItems}
    />
  );
}

export default ManageFood;
