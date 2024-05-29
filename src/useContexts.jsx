import React, { useContext } from 'react'
import MyContext from './Context'

function UseContexts() {
    const context = useContext(MyContext)
    console.log(context)
  return (
    <div>
      {context.map((con)=>{
        return (
            <div>
                {con.name}
            </div>
        )
      })}
    </div>
  )
}

export default UseContexts;
