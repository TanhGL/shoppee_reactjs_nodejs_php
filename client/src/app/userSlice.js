import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);
  return data;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.checkLogin(payload);

  // Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.access_token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const addAddress = createAsyncThunk(
  "user/addAddress",
  async (payload) => {
    const data = await userApi.addAddress(payload);

    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
  }
);

export const removeAddress = createAsyncThunk(
  "user/removeAddress",
  async (payload) => {
    const data = await userApi.removeAddress(payload);

    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
  }
);

export const updateAddress = createAsyncThunk(
  "user/updateAddress",
  async (payload) => {
    const data = await userApi.updateAddress(payload);

    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state, action) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [addAddress.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [removeAddress.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [updateAddress.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
