import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sms } from '../api';

export const onSmsSend = createAsyncThunk('/sms', async (data) => {
  const response = await sms(data);
  return response.data;
});

const initialState = {
  user: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSmsSend.pending, (state) => {
        state.loading = true;
      })
      .addCase(onSmsSend.rejected, (state) => {
        state.loading = false;
      })
      .addCase(onSmsSend.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setStatus } = messageSlice.actions;

const messageReducer = messageSlice.reducer;
export default messageReducer;
