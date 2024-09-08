import {  Col, Image, Row } from "antd"
import "./index.scss"


type AuthenLayoutProps ={
    children: React.ReactNode;
} ;
function AuthenLayout({children}:AuthenLayoutProps) {
    
  return (
    <div className="login">
      <Row align={"middle"} gutter={100}>
         <Col span={14}>
         <Image className="image" src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=LKnvk3" alt=""  width={550}/>
         </Col>
         <Col span={10}>
          {children}
         </Col>
        </Row>
    </div>
  )
}

export default AuthenLayout;