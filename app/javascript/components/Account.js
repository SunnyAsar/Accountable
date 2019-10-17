import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'
class Account extends React.Component {
  render () {
    const {index, account:{title,amount,date,account_type} } = this.props
    console.log("account")
    return (
      // <tr className={`${(account_type == 'income') ? ('has-background-primary'): ('has-background-warning') }`}>
      <tr className="has-text-centered">
        <th>{index+1}</th>
        <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">{title}</a></td>
        <td>$ {amount}</td>
        <td className="small">{moment(`${date}`).format("MMM Do YY")}</td>
        <td className={`is-capitalized has-text-centered ${(account_type == 'income') ? ('is-primary'): ('is-warning') }`}>{account_type}</td>
        <td>65</td>
    </tr>
    );
  }
}

export default Account
