import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface cartState {
  items: Product[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: cartState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (
      state: cartState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

//SELECTORS
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsWithId = (state: RootState, id: string) => {
  state.cart.items.filter((item: Product) => item._id === id);
};
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );

export default cartSlice.reducer;
