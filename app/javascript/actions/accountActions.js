import { SET_ACCOUNTS, SET_ACCOUNT } from './actionConstants'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

export const PostNewAccount = (accountData,token) => {
  return (dispactch) => {
    axios.post(`${BASE_URL}/accounts`, accountData, { headers: {
      'X-CSRF-Token': `${token}`
    }})
      .then(res => {
        console.log(res.data)
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
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
}