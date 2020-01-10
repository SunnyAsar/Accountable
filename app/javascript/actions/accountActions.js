import { SET_ACCOUNTS, SET_ACCOUNT, INSERT_ACCOUNT } from './actionConstants'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://accountable-person.herokuapp.com'

export const PostNewAccount = (accountData,token) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/accounts`, accountData, { headers: {
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

export const fetchAccounts = () => {
  return dispatch => {
    axios.get(`${BASE_URL}/accounts`)
    .then(res => {
      dispatch({type: SET_ACCOUNTS, payload: res.data })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
}