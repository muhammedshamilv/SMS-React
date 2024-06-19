import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';
import messageReducer from './message';

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export const getState = store.getState;
export const dispatch = store.dispatch;
