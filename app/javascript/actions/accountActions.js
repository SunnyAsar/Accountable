import { SET_ACCOUNTS, SET_ACCOUNT, INSERT_ACCOUNT, DELETE_ACCOUNT } from './actionConstants'
import axios from 'axios'
// const BASE_URL = 'http://localhost:3000/accounts'
const BASE_URL = 'https://accountable-person.herokuapp.com/accounts'

export const PostNewAccount = (accountData,token) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}`, accountData, { headers: {
      'X-CSRF-Token': `${token}`
    }})
      .then(res => {
        console.log(res.data)
        dispatch({ type: INSERT_ACCOUNT, payload: res.data })
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }
}

export const DeleteAccount = (id,token) => {
  return (dispatch) => {
    console.log(`we are here and the ID is: ${token}`)
    axios.delete(`${BASE_URL}/${id}`, {headers: {
      'X-CSRF-Token': `${token}`
    }})
    .then(res => {
      console.log(res)
      dispatch({type:DELETE_ACCOUNT, payload:res.data})
    })
    
  }
}

export const fetchAccounts = () => {
  return dispatch => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      dispatch({type: SET_ACCOUNTS, payload: res.data })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
}