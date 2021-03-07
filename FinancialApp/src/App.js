import React from 'react'
import Moment from 'react-moment';
import Financial from './assets/imgs/welcome.gif';


const App = () => {
  const dateToFormat = new Date();
  return (
    <>
      <br />
    
    <Moment date={dateToFormat} />
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="offset-2 col-lg-2 col-md-4 col-sm-6 offset-2">
         
                <div>
                    <img src={Financial} alt="BigCo Inc. logo"/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
