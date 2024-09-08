import { Card } from "antd"
import { useEffect, useState } from "react";

import Meta from "antd/es/card/Meta";
import { toast } from "react-toastify";
import api from "../../config/api";
import { useParams } from "react-router-dom";
import { Food } from "../../models/food";
import "./index.scss"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

function Details() {
    // const [student, setStudent] = useState<Student>();
    const dispatch = useDispatch();

    const handleAddToCard = () => {
      dispatch(addToCart(foods));
    }
    const {id} = useParams();
    const[foods, setFoods] = useState<Food>();
    const fetchFood = async() =>{
        try {
            const response = await api.get(`product/${id}`);
            setFoods(response.data);
           } catch (err) {
            toast.error(err.response.data);
           }
    };

    useEffect(()=> {
        fetchFood();
    },[]);
  return (
    <div className="details">
      <div className="details__left"><img src={foods?.image} alt="" /></div>
      <div className="details__reight">
        <p className="name">{foods?.name}</p> 
        <p className="desc">{foods?.description}</p>
        <button className="button" onClick={handleAddToCard}>ADD</button>
      </div>



        {/* <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={foods?.image}
      />
    }
  >
    <p><strong> ID:</strong>  {foods?.id}</p>
    <Meta
    title={<p>Name:  <span>{foods?.name}</span></p>}
    />
      
      <p><strong>Quantity:</strong> {foods?.quantity}</p>
      <p><strong>Price: </strong> {foods?.price}</p>
      <p><strong>Description:   </strong> {foods?.description}</p>
  </Card> */}
    </div>
  )
}

export default Details