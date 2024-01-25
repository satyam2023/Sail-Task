import { createSlice } from '@reduxjs/toolkit';

const ButtonSlice = createSlice({
  name: 'button',
  initialState: {
    FirstScreenButtonStatus:false,
    SecondScreenButtonStatus:false,
    ThirdScreenButtonStatus:false,
    VisitType:"Upcoming",
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
   },
   setVisitType:(state,action)=>{
    state.VisitType=action.payload
   }
  },
});

export const {setfirstscreen,setSecondscreen,setThirdscreen,setVisitType} = ButtonSlice.actions;


//export const isLog = (state) =>  state.user.isLog;
//export const insaan = (state) => state.user.insaan;

export default ButtonSlice.reducer;
