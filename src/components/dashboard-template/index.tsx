import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import api from "../../config/api";
import dayjs from "dayjs";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: any) => any;
}

interface DashboardTemplateProps {
  columns: Column[];
  apiURI: string;
  formItems: React.ReactElement;
}

function DashboardTemplate({
  columns,
  apiURI,
  formItems,
}: DashboardTemplateProps) {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const fetchCategory = async () => {
    try {
      const response = await api.get(apiURI);
      setIsFetching(false);
      setCategories(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (values.id) {
        // => update
        await api.put(`${apiURI}/${values.id}`, values);
      } else {
        // => create
        await api.post(apiURI, values);
      }

      toast.success("Create new category success!");
      setOpen(false);
      fetchCategory();
    } catch (err) {
      toast.error(err.response.data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`${apiURI}/${id}`);
      toast.success("Delete category success!");
      fetchCategory();
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  //data sources

  return (
    <div>
      <Button
        onClick={() => {
          form.resetFields();
          setOpen(true);
        }}
      >
        Create new category
      </Button>
      <Table
        columns={[
          ...columns,
          {
            title: "Action",
            key: "action",
            render: (record) => (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    setOpen(true);

                    // 1. cần xác định thằng nào là date time => chuyển về đúng định dạng của antd mong muốn

                    // duyệt tất cả thuộc tính xem thằng nào là date time
                    const newRecord = { ...record };

                    for (let key of Object.keys(newRecord)) {
                      // duyệt mỗi thuộc tính có trong object
                      console.log(key);
                      const value = newRecord[key];
                      // check date time
                      // ví dụ key = id => newRecord[id] <=> newRecord.id

                      const date = new Date(value);
                      const time = date.getTime();

                      // "123" => ko phai date time
                      if (typeof value === "number" || isNaN(time)) {
                        // isNaN: is not a number
                        // ko phải ngày tháng năm
                        newRecord[key] = value;
                      } else {
                        // là ngày tháng năm
                        newRecord[key] = dayjs(value); // dayjs => antd yêu cầu
                      }
                    }

                    form.setFieldsValue(newRecord);
                  }}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Delete"
                  description={`Are you sure to delete ${record.name}?`}
                  onConfirm={() => handleDelete(record.id)}
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </>
            ),
          },
        ]}
        dataSource={categories}
        loading={isFetching}
      />
      <Modal
        title="Create new category"
        open={open}
        onCancel={() => setOpen(false)}
        // onOk={() => form.submit()}
        footer={[
          <Button onClick={() => setOpen(false)}>Cancel</Button>,
          <Button
            type="primary"
            onClick={() => form.submit()}
            loading={loading}
          >
            Save
          </Button>,
        ]}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item name="id" label="id" hidden>
            <Input />
          </Form.Item>
          {formItems}
        </Form>
      </Modal>
    </div>
  );
}

export default DashboardTemplate;
