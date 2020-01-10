import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
import { connect } from "react-redux"
import { DeleteAccount } from "../actions/accountActions"


class Account extends React.Component {
  render () {
    const {index,token, account:{id,title,amount,date,account_type} } = this.props
    return (
      <tr className="has-text-centered">
        <th>{index + 1}</th>
        <td><a href="#" title="Arsenal F.C.">{title}</a></td>
        <td>$ {amount}</td>
        <td className="small">{moment(`${date}`).format("MMM Do YY")}</td>
        <td className={`is-capitalized has-text-centered has-text-weight-bold ${(account_type == 'income') ? ('has-text-primary'): ('has-text-warning') }`}>{account_type}</td>
        <td><button class="button is-danger is-small" onClick = {() => {this.props.deletAccount(id,token)}}>Delete</button></td>
    </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.Account.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletAccount: (id,token) => dispatch(DeleteAccount(id,token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)
