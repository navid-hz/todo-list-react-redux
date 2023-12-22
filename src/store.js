import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./redux/reduxReducer";

const store = configureStore({
    reducer: {
      todoAddReducer : reduxReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
});
export default store;