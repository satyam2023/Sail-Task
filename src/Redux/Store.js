import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice';
import buttonreducer from './Slice2';
 

const store = configureStore({
  reducer: {
    button:buttonreducer,
    
  },
 
});

export default store;
