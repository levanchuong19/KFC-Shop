
import { Food } from "../../models/food"
import "./index.scss"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

 type CardProps ={
    food: Food;
 }

function Card({food}:CardProps) {
  const navigate = useNavigate();
    // const{name,description, image,id,price} = food;
    const dispatch = useDispatch();

    const handleAddToCard = () => {
      dispatch(addToCart(food));
    }
  return (
    <div className="food-card">
        <img onClick={()=> navigate(`/details/${food.id}`)} src={food.image} alt="" />
        <div className="food-card__content">
        <div className="food-card__information">
            <span>{food.name}</span>
            <span>{food.price}</span>
        </div>
        <div className="description">
        {food.description.substring(0,100)}
          {food.description.length > 100 && "..."}
        
        </div>
        <button className="button" onClick={handleAddToCard}>ADD</button>
        </div>
        
    </div>
  )
}

export default Card;