import React from 'react'
import {useSelector} from 'react-redux';
import AddPayment from './AddPaymnet'
import DeletePayment from './DeletePayment'
import { Paper, Body,} from './Styles';
import {Link} from 'react-router-dom';




const Payment = () => {
  const bills = useSelector(state => state.payments);
  const totalCost = useSelector(state => state.totalCost);
  //const newId = useSelector(state => state.payments.newId);
console.log(bills)
  return (
    <>
    <Body>
      <AddPayment />
      <div className="container-fluid"> 
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Paymnet</th>
      <th scope="col">Cost</th>
      <th scope="col">Notes</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  
      {bills.map(p =>{
        return (
          <tr>
              <th scope="row" key={p.id} >{p.newId}</th>
              <td >{p.billName}</td>
              <td>{p.cost}</td>
              <td>{p.notes}</td>
              <td><DeletePayment payment={p}/></td>
              
          </tr>
        ) })}
    
  </tbody>
</table>
<div class="container-fluid">
    <div class="row mt-5">
        <div class="offset-1 col-5">
            <Paper><h4>Total Amount: ${totalCost}</h4> </Paper>
            </div>
        < div class=" col-5">
            {/* <button className="w-100 h-100 btn btn-warning"><Link to="/API">Click Me</Link></button> */}
            <Link className="badge badge-warning w-100 h-90
             text-center  " to="/API"><h3>Web Services</h3></Link>
            
            </div>
    </div>
</div>
</div>
</Body>
    </>
  )
}

export default Payment


