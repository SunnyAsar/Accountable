import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchAccounts } from '../actions/accountActions'
import Chart from './Chart'
import AccountList from "./AccountList"
// import { Line, HorizontalBar, Radar, Bar } from 'react-chartjs-2';
class History extends React.Component {
  componentDidMount () {
    this.props.getAccounts()
  }
  render () {
    const { accounts } = this.props
  const DataChart = accounts && accounts.length > 0 ? (<Chart accounts={accounts}/>) :(<p>Data on the way</p>)
    return (
      <div className="container">
       <section className="section">
        {DataChart}
       </section>
       <section className="section">
       <h2 className="title has-text-link is-5 small has-text-centered"> All Accounts of Income and Expenses</h2>

       <AccountList accounts={accounts} />
       </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.Account.accounts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: () => dispatch(fetchAccounts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
