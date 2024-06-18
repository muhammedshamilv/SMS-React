import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, register } from '../api';
import LocalStorageService from '../utils/LocalStorageServices';

export const onLogin = createAsyncThunk('auth/login', async (data) => {
  const response = await login(data);
  const { access_token, refresh_token, user } = response.data;
  LocalStorageService.setToken(access_token, refresh_token);
  LocalStorageService.setUser(user);
  return response.data;
});

export const onRegister = createAsyncThunk('auth/register', async (data) => {
  const response = await register(data);
  const { access_token, refresh_token } = response.data;
  LocalStorageService.setToken(access_token, refresh_token);
  return response.data;
});

const initialState = {
  user: null,
  credentials: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(onLogin.rejected, (state) => {
        state.loading = false;
      })
      .addCase(onLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(onRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(onRegister.rejected, (state) => {
        state.loading = false;
      })
      .addCase(onRegister.fulfilled, (state, action) => {
        state.credentials = action.payload;
        state.loading = false;
      });
  },
});

export const { setStatus } = userSlice.actions;

export const selectUser = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
