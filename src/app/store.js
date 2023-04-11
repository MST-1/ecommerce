import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartAdder from '../features/counter/cart';

export default configureStore({
  reducer: {
    counter: counterReducer,
    carter:cartAdder

  },
});