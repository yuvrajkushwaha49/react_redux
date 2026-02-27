import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './features/counter/CunterSlice';

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      Count {count}
      <button  onClick={()=>dispatch(increment())}> +</button>

    </div>
  );
}

export default App;
