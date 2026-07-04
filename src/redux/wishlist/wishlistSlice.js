import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      const alreadyExists = state.wishlist.find(
        (hotel) => hotel.id === action.payload.id
      );

      if (!alreadyExists) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;