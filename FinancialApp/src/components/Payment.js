import React from 'react'
import {useSelector} from 'react-redux';
import AddPayment from './AddPaymnet'
import DeletePayment from './DeletePayment'
import { Paper, Body } from './Styles';



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
<Paper> total Amount: ${totalCost}</Paper>

</div>
</Body>
    </>
  )
}

export default Payment


