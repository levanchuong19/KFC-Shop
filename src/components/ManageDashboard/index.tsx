import { Button, Form, Modal, Popconfirm, Table } from "antd"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import api from "../../config/api";
import dayjs from "dayjs";

export interface Columns{
    title:string;
    dataIndex:string;
    key: string;
    render?: (value: any) => any;
}
 
interface ManageTemplaceProps{
    title:string;
    columns:Columns[];
    formItems: React.ReactElement
    apiURI: string;
}


function ManageTemple({columns, title, formItems,apiURI} : ManageTemplaceProps) {
    //Table
    //columns
    //dataSource
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [fetching , setFetching] = useState(true);
    const [tabbleColumns, setTableColumns] = useState([]);
    useEffect (()=> {
        // useEffect nay se chay moi khi bien columns thay doi
        const newColumns = [...columns,{
                title:"Action",
                dataIndex:"id",
                key: "id",
                render:(id, record) => {
                    return(
                        <>
                        <Button type="primary" onClick={()=>
                             {setShowModal(true);
                                const newRecord = {...record};
                              //tao 1 vong lap
                              //tao 1 vong useLayoutEffect(() => {
                                //check tat ca cac thuoc tinh xem thang nao laf kieu du lieu date time
                                for(var key of Object.keys(newRecord)){
                                    //record[key]
                                    //record[id] <=> record.id
                                    const value = newRecord[key];
                                    var date: any = new Date(value);
                                    const time: any = date.getTime();
                                    
                                    if( typeof value ==="number" || isNaN(time)){
                                     //thang nay ko phai date time
                                     console.log(key)
                                     newRecord[key] = record[key];
                                    }else{
                                       //thang nay la date time va can cap nhat theo dung dinh dang antd
                                       newRecord[key] = dayjs(value);
                                    }

                                }
                                console.log(newRecord);
                                form.setFieldsValue(newRecord);
                              }}
                              
                              >Edit</Button>
                              <Popconfirm title="Delete" description="Are you sure delete item" >
                              <Button type="primary" danger onClick={() =>handelDelete(id)} >Delete</Button>
                                  </Popconfirm>
                        
                        </>
                    );
                },
            },
        ];
    setTableColumns(newColumns);
    }, [columns]);
    
    
    const handleSubmit = async (values) => {
        setLoading(true);
        try{
            if(values.id){
                await api.put(`${apiURI}/${values.id}`,  values);
            }else{
                await api.post(apiURI,  values);
            }
            
            setLoading(false);
            toast.success("Successfully create category");
            fetchCategory();
            setShowModal(false);
            form.resetFields();
        }catch(err){
            toast.error("Error create category")
        }
    }

    const handelDelete = async (id:number) =>{
        try{
            await api.delete(`${title}/${id}`);
            toast.success("Successfully");
            fetchCategory();
        }catch(err){
            toast.error("Error delete")
        }
    }
    const fetchCategory = async()=>{
        try{
            const response = await api.get(apiURI);
        setCategories(response.data);
        setFetching(false);
        }catch(err){
            toast.error(`Error fetching ${title}`);
        }
    };

    useEffect (() => {
        fetchCategory();
    },[]);
    
     

  return (
    <div>
        <Button onClick={() =>{
            form.resetFields();
            setShowModal(true);
        }} >Create new {title}</Button>
        <Table columns={tabbleColumns} dataSource={categories} loading={fetching}/>
        <Modal open={showModal} onCancel={() =>setShowModal(false)} 
        onOk={() => form.submit() }
        footer={[
            <Button key="black" onClick={() => setShowModal(false)}>
            Cancle
            </Button>,
            <Button type="primary" onClick={() => form.submit()} loading={loading}>
            Create
            </Button>
        ]}
        >
           <Form labelCol={{
            span:24,
           }}
           form={form}
           onFinish={handleSubmit}
           >
            <Form.Item name="id" label="id" hidden >
               
            </Form.Item>
            {formItems}
            </Form> 
            
        </Modal>
    </div>
  )
}

export default ManageTemple