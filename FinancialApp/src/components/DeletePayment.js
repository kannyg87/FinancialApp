import React from 'react';
import {useDispatch} from 'react-redux';
import {deletePayment} from '../actions/templeteAction'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




const DeletePayment = ({payment}) => {

    const dispatch = useDispatch();
    const element = <FontAwesomeIcon icon={faTrash} />
    
  return (
    <>
        <button onClick={()=>dispatch(deletePayment(payment))} >{element}</button>
    </>
  )
}

export default DeletePayment;
