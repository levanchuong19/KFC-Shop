import React, { useEffect, useState } from "react";

import Card from "../card";
import { Food } from "../../model/food";
import api from "../../config/api";
import { toast } from "react-toastify";
import "./index.scss";

function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);

  const fetchFoods = async () => {
    try {
      const response = await api.get("product");
      setFoods(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="food-list">
      {foods.map((food) => (
        <Card food={food} />
      ))}
    </div>
  );
}

export default FoodList;
