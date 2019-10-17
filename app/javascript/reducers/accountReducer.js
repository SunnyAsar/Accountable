import { SET_ACCOUNTS, SET_ACCOUNT,INSERT_ACCOUNT } from '../actions/actionConstants'


const initialState = {

}

const account = (state= initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
        return {
          ...state,
          accounts: action.payload
        }
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }
    case INSERT_ACCOUNT:
      return{
        ...state,
        accounts: [action.payload, ...state.accounts]
      }
    case 'TOKEN':
      return {
        ...state,
        token: action.payload
      }
    default:
      return initialState
  }
}

export default account