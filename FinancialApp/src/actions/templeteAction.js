// action creatrer returen an object

export const addPayment = (paymnet) => {

    return {
        type: "ADD_BILL_NAME",
        data: paymnet
    }
}

//product should be unique id
export const deletePayment = (payment) => {

    return {
        type: "DELETE_BILL_NAME",
        data: payment
    }
}




// this is not named export. when we import into our component import { incremnet} from './path, in case of named export export default incremnet import incremnet from './path