
import { Button, Form, Input, Select } from 'antd'
import AuthenLayout from '../../components/auth-layout'
import api from '../../config/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./index.scss"

function Register() {
 
    const navigate = useNavigate(); 
    const handleRegiter =  async (values) => {
        try{
           await api.post("register",values);
           toast.success("Register success !");
           navigate("/login");

        }catch(err){
         toast.error(err.response.data);
        }
    };
  return (
    <AuthenLayout>
      <Form
     style={{gap:20}}
      name="userForm"
      onFinish={handleRegiter}
      layout="vertical"
      initialValues={{
        role: 'ADMIN',
      }}
    >
      <Form.Item
        name="phone"
        label="Phone"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input className='input' placeholder='Phone*'/>
        <div className='line'></div>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password className='input' placeholder='Password*'/>
        <div className='line'></div>
      </Form.Item>
      
      <Form.Item 
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: 'Please enter your full name' }]}
      >
        <Input placeholder='Full Name*' className='input'/>
        <div className='line'></div>
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder='Email*' className='input'/>
        <div className='line'></div>
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </AuthenLayout>
  )
}

export default Register