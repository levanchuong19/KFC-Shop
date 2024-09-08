import { Button, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"
import api from "../../config/api";
import { toast } from "react-toastify";
import AuthenLayout from "../../components/auth-layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/userSlice";
import './index.scss'

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try{
      const response = await api.post("login",values);
      const {token ,role } = response.data;
      localStorage.setItem("token",token);
      toast.success("Login success!");
      
      // navigate("/");
      if(role === "ADMIN"){
        navigate("/dashboard");
        
      }
      // lưu trữ thông tin của user
      // dispatch action
      dispatch(login(response.data));
    }catch(err){
      toast.error(err.response.data);
    }
  };  

  return (
    <AuthenLayout >
      <h1>Login</h1>
    <Form className="login" labelCol={{span:24,}} onFinish={handleLogin} >
    <FormItem  name="phone" rules={[{
        required: true,
        message: "Please enter your email",
    }]}>
      <Input className="input" placeholder="Email *" ></Input>
      <div className="line"></div>
    </FormItem>
    <FormItem  name="password" rules={[{
        required: true,
        message: "Please enter your password",
    }]}>
      <Input.Password className="input" placeholder="Password*" ></Input.Password>
      <div className="line"></div>
    </FormItem>
    <Button type="primary" htmlType="submit" style={{width:"100%"}}>Login</Button>
    <Button type="default" htmlType="submit" style={{width:"100%", backgroundColor:"green", margin: "20px 0px", color:"#fff"}} href="/register">Register</Button>
    
 </Form>
</AuthenLayout>
  )
}

export default Login;