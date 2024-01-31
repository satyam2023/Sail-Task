import { createSlice } from '@reduxjs/toolkit';

const ButtonSlice = createSlice({
  name: 'button',
  initialState: {
    FirstScreenButtonStatus:false,
    SecondScreenButtonStatus:false,
    ThirdScreenButtonStatus:false,
    VisitType:"Upcoming",
    EnquiryScreen:1,
    CustomerProfileButton:false,
    CompetitorButtonStatus:false,
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
   },
   setEnquiryScreen:(state,action)=>{
    console.log("REdux Screen::",action.payload)

     state.EnquiryScreen=action.payload
   },
   setCustomerProfileButton:(state,action)=>{
    state.CustomerProfileButton=action.payload
   },
   setCompetitorButtonStatus:(state,action)=>{
    state.CompetitorButtonStatus=action.payload
   }
  },
});

export const {setCompetitorButtonStatus,setfirstscreen,setSecondscreen,setThirdscreen,setVisitType,setEnquiryScreen,setCustomerProfileButton} = ButtonSlice.actions;


//export const isLog = (state) =>  state.user.isLog;
//export const insaan = (state) => state.user.insaan;

export default ButtonSlice.reducer;
