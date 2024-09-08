import { Form, Input } from "antd";
import ManageTemple from "../../../components/ManageDashboard"


function ManageCategory() {
    const title = "category";
    const columns =[
        {title:"ID", dataIndex:"id" ,key:"id"},
        {title:"Name", dataIndex:"name" ,key:"name"},
        {title:"Description", dataIndex:"description" ,key:"description"},
    ];
    const formItems = (
    <>
    <Form.Item  name="name" label="Name" rules={[{
                required: true,
                message:"Please input category name",
            }]}>
               <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
               <Input.TextArea />
            </Form.Item>
    </>
    );
  return (
    <div><ManageTemple title={title} columns={columns} formItems={formItems} apiURI="category"/></div>
  )
}

export default ManageCategory