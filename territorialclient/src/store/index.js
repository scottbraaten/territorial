import authSlice from "./auth";
import landtypeSlice from "./landtype";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    landtype: landtypeSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const landtypeActions = landtypeSlice.actions;
export const authActions = authSlice.actions;

export default store;
