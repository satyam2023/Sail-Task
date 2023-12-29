import { createSlice } from '@reduxjs/toolkit';

const ButtonSlice = createSlice({
  name: 'button',
  initialState: {
    FirstScreenButtonStatus:false,
    SecondScreenButtonStatus:false,
    ThirdScreenButtonStatus:false,
  },
  reducers: {
   setfirstscreen:(state,action)=>{
   
    state.FirstScreenButtonStatus=action.payload
   },
   setSecondscreen:(state,action)=>{
    console.log("payload",action.payload)
    state.SecondScreenButtonStatus=action.payload
   },
   setThirdscreen:(state,action)=>{
    state.ThirdScreenButtonStatus=action.payload
   }
  },
});

export const {setfirstscreen,setSecondscreen,setThirdscreen} = ButtonSlice.actions;


//export const isLog = (state) =>  state.user.isLog;
//export const insaan = (state) => state.user.insaan;

export default ButtonSlice.reducer;
