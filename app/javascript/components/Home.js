import React from "react"
import PropTypes from "prop-types"
import PostAccount from "./PostAccount"
import { connect } from 'react-redux'
import { fetchAccounts } from '../actions/accountActions'
import Account from "./Account"
import AccountList from './AccountList'


class Home extends React.Component {
  state = {
    accounts: []
  }
  componentDidMount () {
    this.props.getAccounts()
  }
  render () {
    const  accounts  = this.props.accounts
      

    return (
     <div className="container is-fluid">
       <div className="columns">
          <div className="column">
            <PostAccount/>
          </div>

          <div className="column is-three-fifths">
          <section className="section">
            <h2 className="title has-text-link is-5 small has-text-centered"> Latest Account of Income and Expenses</h2>
            <AccountList accounts={accounts}/>
          </section>
          </div>
       </div>

      
     </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    accounts: state.Account.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: () => dispatch(fetchAccounts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
