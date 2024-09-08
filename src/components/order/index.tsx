import { Button } from "antd"
import "./index.scss"
import { useNavigate } from "react-router-dom"
function Order() {
  const navigate = useNavigate();
  return (
    <div className="order">
        <h4>Let's Order</h4>
        <div className="sub">
            <img src="https://png.pngtree.com/png-clipart/20240323/original/pngtree-delivery-worker-in-motorcycle-png-image_14659814.png" alt=""  width={50}/>
        <h4>for Delivery</h4>
        </div>
        <div className="sub">
        <img src="https://s.alicdn.com/@sc04/kf/U1d9a4992175f47918283eeb6638e9f81Z.png_300x300.jpg" alt=""  width={50}/>
        <h4>or Takeaway</h4>
        </div>
        <Button onClick={() => navigate("/order_page")} style={{borderRadius:"20px", marginTop:"-9px", fontWeight:"bold"}} type="primary" danger>Start Order</Button>
    </div>
  )
}

export default Order