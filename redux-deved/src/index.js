import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import allReducers from "./reducers"

const store = createStore(allReducers)




// //ACTION
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
   
// }
// const reset =() =>{
//   return {
//     type: "RESET"
//   }
// }
// // const initialState = 0;
// //REDUCER
// const initialState = 0;
// const reducerCount = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state+1;
//     case "DECREMENT":
//       return state-1;
//     case "RESET":
//       return state=0;
//     default:
//       return null;
//   }

// } 
// //STORE -> GLOBALIZED STATE
// let store = createStore(reducerCount);

// store.subscribe(()=> console.log(store.getState()));
// //DISPATCH
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())
// store.dispatch(decrement())
// store.dispatch(decrement())
// store.dispatch(reset())


// //display the store variable



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
