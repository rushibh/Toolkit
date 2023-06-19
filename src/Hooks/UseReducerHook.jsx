import { useReducer } from "react"

const initailState = 0

const reducer = (state , action) => {
    if(action.type == "INCREMENT") {
       return state + 1
    }
    if(action.type == "DECREMENT") {
       return state - 1
    }
}
const UseReducerHook = () => {
    const[state , dispatch] = useReducer(reducer , initailState)
  return (
    <div>
        <button className="btn btn-outline-primary" onClick={() => dispatch({ type : "INCREMENT"})}>+</button>
        {state}
        <button className="btn btn-outline-primary" onClick={() => dispatch({ type : "DECREMENT"})}>-</button>
    </div>
  )
}

export default UseReducerHook