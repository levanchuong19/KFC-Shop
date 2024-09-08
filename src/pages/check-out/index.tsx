import { useSelector } from "react-redux";
import "./index.scss";
import { RootState,} from "../../redux/store";
import { Food } from "../../models/food";
import formatVND from "../utils/currency";

function CheckOut() {
  const cart = useSelector((store : RootState)=> store.cart)
  return (
    <div className="check-out">
      <div className="check-out__items box">
        {cart.map((food) => (
          <CheckOutItems food={food}/>
        ))}
      </div>
      <div className="check-out__detail box"></div>
    </div>
  );
}
 interface CheckOutItemsProps {
  food: Food;
 }
const CheckOutItems = ({food} : CheckOutItemsProps) => {
  return (
    <div className="item">
    <img width={200} src={food.image} alt="" />
    
    <div className="info">
    <h3 style={{width:400}}>{food.name}</h3>
    <p style={{width:550}}>{food.description}</p>
      </div> 
      <h3>{food.quantity}</h3>   
    <h3 style={{width:"100px"}}>{formatVND(food.price)}</h3>
    </div>
  )
};
export default CheckOut;
