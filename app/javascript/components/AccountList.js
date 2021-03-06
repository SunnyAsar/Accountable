import React from "react"
import PropTypes from "prop-types"
import PostAccount from "./PostAccount"
import { connect } from 'react-redux'
import { fetchAccounts } from '../actions/accountActions'
import Account from "./Account"


class AccountList extends React.Component {
  state = {
    accounts: []
  }
  componentDidMount () {
    this.props.getAccounts()
  }
  render () {
    const { accounts } = this.props
      const AccountsData =  (accounts && accounts.length > 0) ? (accounts.map((account, index) => {
        return (<Account account={account} key={account.id} index={index} />)
      })) : ('something is happening')

    return (
        <table style={{overflowY:'scroll',
          height:'25vh',
          maxWidth: '100%',
          }} className="table is-hoverable is-fullwidth is-narrow is-striped">
          <thead>
            <tr>
              <th><abbr title="serial number">Pos</abbr></th>
              <th>Title</th>
              <th><abbr title="Amount">Amount</abbr></th>
              <th><abbr title="Date of account">Date</abbr></th>
              <th><abbr title="Income or expense">Funds Type</abbr></th>
              <th><abbr title="Actions">Actions</abbr></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
            <th><abbr title="serial number">Pos</abbr></th>
              <th>Title</th>
              <th><abbr title="Amount">Amount</abbr></th>
              <th><abbr title="Date of account">Date</abbr></th>
              <th><abbr title="Income or expense">Funds Type</abbr></th>
              <th><abbr title="Actions">Actions</abbr></th>
            </tr>
          </tfoot>
          <tbody>
            {AccountsData}
          </tbody>
        </table>
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

export default connect(mapStateToProps,mapDispatchToProps)(AccountList)
