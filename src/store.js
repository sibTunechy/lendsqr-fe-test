import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./features/Table/tableSlice";
import useReducer from "./features/User/userSlice";
import togglereducer from "./features/UserPageToggle/userToggleSlice";
export const store = configureStore({
  reducer: {
    table: tableReducer,
    user: useReducer,
    toggle: togglereducer,
  },
});
