import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    gender:null,
    phonenumber:null,
    email:null,
    password: null,
    token:null,

    userdata:[
      {
        userName: null,
        gender:null,
        phonenumber:"9999999999",
        email:null,
        password: "Satyam@1",
        token:null,
      }
    
    ],
    isLog :false,
  },
  reducers: {
    setUserName: (state, action) => {
      console.log("entered username:",action.payload)
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      console.log("entered Password:",action.payload)
      state.password = action.payload;
    },
    setGender:(state,action)=>{
      console.log("entered Gender:",action.payload)
      state.gender = action.payload;
    },
    setEmail:(state,action)=>{
      console.log("entered Email:",action.payload)
      state.email = action.payload;
    },
    setPhone:(state,action)=>{
      console.log("entered Phone:",action.payload)
      state.phonenumber = action.payload;
    },
    setSignUp:(state,action)=>{
        console.log("signup status:",action.payload)
       state.userdata.push(action.payload) 
       console.log("first user:",state.userdata)
      },
       setLogIn:(state,action)=>{
       
         
       state.userdata.some(item=>{
        console.log("intial or previous phone:",item.phonenumber);
        console.log("Reduc Login data  action received phonenumber:",action.payload.phonenumber);
        console.log("Reduc Login data action reciewved password:",action.payload.password);
        console.log("intial or previous password :",item.password)
        
       // console.log("action payload of ")
        if((item.phonenumber==action.payload.phonenumber)  && (item.password==action.payload.password)){
          console.log("enter data match with registered user");
          state.isLog=true;
        }
       else{
          state.isLog=false;
        }

       })

    },
    setIsLog(state,action){
      state.isLog=action.payload;
    }
    
  },
});

export const {setUserName,setPassword,setSignUp,setLogIn,setEmail,setGender,setPhone,setIsLog } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;

export const isLog = (state) =>  state.user.isLog;

export default userSlice.reducer;
