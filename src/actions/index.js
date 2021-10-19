import BankingService from "../services/data";
const service= new BankingService()

const fetchRequested = () => {
    return{
        type: 'REQUESTED'
    }
}

const fetchLoaded = (items) => {
    return {
        type: 'LOADED',
        payload: items
    }
}

const fetchError = (error) => {
    return{
        type: 'ERROR',
        payload: error
    }
}
const fetchAccounts = (dispatch) => () => {
    dispatch(fetchRequested())
    service.getAccounts()
        .then((data) => dispatch(fetchLoaded(data)))
        .catch((error) => dispatch(fetchError(error)))
}

export{
    fetchAccounts
}