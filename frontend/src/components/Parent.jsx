import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name ="Sharmika" age={25} marks={[90,92,93,94,95]}
         person={{name:"sharmika",dept:["AIDS"]}}/>
    </div>
  )
}

export default Parent