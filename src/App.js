import logo from './logo.svg';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {actions} from "./store/index";
function App() {
  const counter=useSelector((state=>state.counter));
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
  }
  const decrement=()=>{
    dispatch(actions.decrement());
  }
  const Add =()=>{
    dispatch(actions.Add(10));
  }
  return (
    <div className="App">
      <h1>counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Add}>Add by 5</button>
    </div>
  );
}

export default App;
