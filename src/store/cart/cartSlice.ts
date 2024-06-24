import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      state.items[id] ? state.items[id]++ : (state.items[id] = 1);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
