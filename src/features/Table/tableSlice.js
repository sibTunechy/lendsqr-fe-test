import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const initialState = {
  tableColumn: [
    "orgName",
    "userName",
    "email",
    "phoneNumber",
    "createdAt",
    "Status",
    "edit",
  ],
  tableColumnName: [
    "Organisation",
    "username",
    "email",
    "phone Number",
    " date joined",
    "status",
    // "",
  ],
  tableRow: [],
  tableDate: [],
  isLoading: false,
};

export const getTableData = createAsyncThunk("table/getTableData", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducer: {},
  extraReducers: {
    [getTableData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTableData.fulfilled]: (state, action) => {
      let rowData = [];
      state.isLoading = false;
      action.payload.map((obj) => {
        const { orgName, userName, email, phoneNumber, createdAt, id } = obj;
        rowData.push({
          orgName,
          userName,
          email,
          phoneNumber,
          createdAt,
          Status: "",
          id,
        
        });
      });
      state.tableRow = rowData;
    },
    [getTableData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default tableSlice.reducer;
