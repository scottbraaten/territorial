import { createSlice } from "@reduxjs/toolkit";

const landtypeSlice = createSlice({
  name: "landtype",
  initialState: { landtype: "dirt" },
  reducers: {
    change(state, action) {
      state.landtype = action.payload;
    },
  },
  // we need to fill the rest of this with pricing information
});

export default landtypeSlice;
