import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './actions';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const count = useSelector(state => state.Counter);
  const logData = useSelector(state => state.logReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter : {count}</h2>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <p><button onClick={()=> dispatch(decrement())}>-</button></p>
      <p>{logData ? "You are logged in" : "You are not logged in"}</p>
      </div>
  );
}

export default App;
