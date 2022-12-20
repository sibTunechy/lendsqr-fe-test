import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userDetail: [],
  isLoading: false,
  isLoggedIn: false,
};

export const getUser = createAsyncThunk("user/getUser", (id) => {
  return fetch(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginState: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetail = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = true;
      state.userDetail = [];
    },
  },
});

export default userSlice.reducer;

export const  {setLoginState} = userSlice.actions
