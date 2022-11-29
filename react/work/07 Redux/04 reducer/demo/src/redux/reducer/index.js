import Loginusers from "./loginUser";
import users from "./users";

 const initialState = {
     Loginusers:null,
     users:null,
 }
 
 export default (state = initialState, { type, payload }) => {
   switch (type) {
 
   case first:
     return { ...state, ...payload }
 
   default:
     return state
   }
 }
 