import React from 'react'
import Moment from 'react-moment';


const App = () => {
  const dateToFormat = new Date();
  return (
    <>
      <br />
    
            <Moment date={dateToFormat} />
    </>
  )
}

export default App
