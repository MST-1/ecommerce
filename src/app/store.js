import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartAdder from '../features/counter/cart';
import forId from '../features/counter/forId';

export default configureStore({
  reducer: {
    counter: counterReducer,
    carter:cartAdder,
     forId:forId

  },
});