import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , reset , incrementBynumber} from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const [Num , setNum ] = useState(0)
    const count = useSelector((state) => state.counters.counter); // middle counters are come from store.jsx file in configureStore ({ counters : counterSlice })
    const dispatch = useDispatch();
    const incres = () => {
        dispatch(increment())
    }

    const reseted = () => {
        dispatch(reset())
        setNum(0)
    }

    const addvalue = Number(Num) || 0

    const incrementNumber = () => {
        dispatch(incrementBynumber(addvalue))
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={incres}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>


        <input type='text' value={addvalue} onChange={(e) => setNum(e.target.value)}></input>
        <button onClick={incrementNumber}>AddNumber</button>
        <button onClick={reseted}> reset</button>
    </div>
  )
}

export default Counter;
