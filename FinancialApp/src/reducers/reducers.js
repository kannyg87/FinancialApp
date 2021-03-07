import {v1 as uuidv1} from "uuid"


const initialState ={
    totalCost:0,    
    payments:[
        {
        id: uuidv1(),
        billName :"gas",
        cost: 22
        ,
        newId: 1,
        notes:"notes",
        date: new Date(),
        }
            ]
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BILL_NAME":
            return{
                ...state,
                totalCost: state.totalCost + parseFloat(action.data.cost),
                payments: [...state.payments, action.data] 
            }  
            case 'DELETE_BILL_NAME':
                let filterPayment = state.payments.filter(payment => {
                    return payment.id !== action.data.id
                })
                return {
                    ...state,
                    totalCost: state.totalCost - parseFloat(action.data.cost),
                    payments: filterPayment
                } 
        
        default:
            return state;
    }
}

export default reducers
