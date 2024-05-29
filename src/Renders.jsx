import React, { useCallback, useContext, useRef, useState } from 'react'
import MyContext from './Context';

function Renders() {
  // const [state,dispatch] = useReducer(reducer,initialState)
    const [count,setCount] = useState(0)
    const objects = useContext(MyContext);
    console.log(objects);
    const values = Object.values(objects)
    console.log(values);
    const countRef = useRef(0);

    const clickBtn = () => {
      countRef.current += 1;

      console.log('Ref value:', countRef.current);
    };

    const memoizedIncrement = useCallback(() => {
      setCount(count + 1);
    }, [count]);

  return (
    <div>
      {/* {values.map((value)=>{
        console.log(value);
        return (
            <div>
            </div>
        )
      })} */}

      <button onClick={memoizedIncrement}>backendCount</button>

      <h1>{count}</h1>

      <h1>Ref value: {countRef.current}</h1>
      <button type='submit' onClick={clickBtn}>count</button>

    </div>
  )
}

export default Renders;
