import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react'
import {v1 as uuidv1} from 'uuid';
import {addPayment} from '../actions/templeteAction'
import Financial from '../assets/imgs/financial.jpg';



const AddPaymnet = () => {
    const [id,setId]=useState(1);
    const dispatch =useDispatch();
    

    const handleEvent =(e) =>{
        e.preventDefault();
        setId(id+1);

        console.log(e.target.name.value)
        console.log(e.target.cost.value)
        let payments ={
            id: uuidv1(),
            newId: id,
            billName: e.target.name.value,
            cost: e.target.cost.value,
            notes: e.target.notes.value,
            time:e.target.time.value
        }
        dispatch(addPayment(payments));
        e.target.name.value = "";
        e.target.cost.value = "";
        e.target.notes.value= "";
        e.target.time.value= "";

    }

    return (
    <>
<div class="container-fluid">
    <div class="row mt-5">
        <div class=" col-5">
                <form onSubmit={handleEvent}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Billing Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Billing Name ..." />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Amount</label>
                    <input type="text" class="form-control" id="cost" placeholder="price $" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Notes</label>
                    <textarea class="form-control" id="notes" rows="3"></textarea>
                </div>
                

                <div class="form-group">
                    <label for="example-datetime-local-input"  >Date and time</label>
                    <input className="form-control" type="datetime-local"  id="time" /> 
                    {/* <DatePicker
                        onChange={onChange}
                        value={value}
                                        /> */}

                    </div>


                <button type="submit" class="btn btn-warning mb-5">Submit</button>
                </form>
        </div> 
        <div class=" col-5">
                <div>
                    <img src={Financial} alt="BigCo Inc. logo"/>
                </div>
            </div>

    </div>
</div>
    </>
    )
}

export default AddPaymnet
