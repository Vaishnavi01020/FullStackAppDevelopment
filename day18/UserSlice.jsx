import {
  createSlice
} from "@reduxjs/toolkit";
export const UserSlice=createSlice ({
  name:"user",
  initialState:
  {
      user:null
  },
  reducers:{
      Login:(state,action)=>{
          state.user=action.payload;
      },
      Logout:(state)=>{
          state.user=null;
      }
      
  }
})
export const {Login,Logout}=UserSlice.actions;
export const selectUser=(state)=>state.user.user;
export default UserSlice.reducer;
