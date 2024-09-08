import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
function Header() {
    const navigate = useNavigate();
    // lay du lieu tu redux len 
    const cart = useSelector((store: RootState) => store.cart);
    const checkOut = () =>{
      if(cart.length > 0){
        navigate("/check-out");
      }else{
        navigate("/");
      }
    }
  return (

    <div className="header">
     <div className="header__left">
          <a href="/"> 
          <img src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0" alt="" width={55}/>
          </a>
          <ul>
            <a href="/"><li>Menu</li></a>
            <a href="/"><li>Deals</li></a>
            <a href="/"><li> Book a Party</li></a>
            <a href="/"><li>Find a KFC</li></a>
          </ul>
     </div>
     <div className="header__right">
      {/* <Link to={"/check-out"} className="header__cart">
      <span className="number">{cart.length}</span>
      </Link> */}
      <a onClick={() => checkOut()} className="header__cart number">{cart.length}</a>
         <div className="header__account">
         <UserOutlined size={100} className="icon" onClick={() => navigate("/login")}/>
         </div>
     </div>


    </div>
  )
}

export default Header