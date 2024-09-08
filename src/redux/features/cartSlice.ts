import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Food } from "../../models/food";


const cartSlice = createSlice({
  name: "cart",
  initialState: [], // initialState: initialState
  reducers: {
    addToCart: (state: Food[], action: PayloadAction<Food>) => {
      // Kiểm tra xem food đã có trong giỏ hàng chưa

      const index = state.findIndex((food) => food.id === action.payload.id);
      if (index == -1) {
        // chưa tồn tại => thêm
        state.push({
          ...action.payload, // food
          quantity: 1,
        });
      } else {
        // đã tồn tại => tăng số lượng
        state[index].quantity++;
      }
    },
    reset: (state, action) => [],
    remove: (state, action) => [],
    changeQuantity: (state, action) => [],
  },
});

export const { addToCart, remove, changeQuantity, reset } = cartSlice.actions;

export default cartSlice.reducer;
