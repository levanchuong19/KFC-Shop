import "./index.scss"
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";
function OrderPage() {
   
    const navigate = useNavigate();
  return (
    <div className="orderPage">
        <div className="logo">
            <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png" alt=""  width={100}/></a>
            <div className="header__right">
         <div className="account">
         <UserOutlined size={100} className="icon" onClick={() => navigate("/login")}/>
         </div>
     </div>
        </div>
        <div className="img">
          <img style={{width:"100%",}} src="https://static.kfcvietnam.com.vn/images/web/store-selection/lg/localization-bg.jpg?v=5.0" alt=""  />
        </div>
        <div className="Form">
        <h1>LET'S START ORDERING</h1>
        <div className="form">
          
          <div className="theA">
            <div><a className="a" href="">DELIVERY</a></div>
            <div><a className="a" href="">PICK UP</a></div>
          </div>
            <div><Button> Use My Location {">"}</Button></div>
            <Input placeholder="Enter Your Delivery Address"/>
        </div>
        
        </div>
        
        <div className="footer__mini">
          Kentucky Fried Chicken Vietnam Company. All rights reserved.
        </div>
    </div>
  )
}

export default OrderPage