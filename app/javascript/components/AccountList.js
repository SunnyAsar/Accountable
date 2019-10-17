import React from "react"
import PropTypes from "prop-types"
import PostAccount from "./PostAccount"
import { connect } from 'react-redux'
import { fetchAccounts } from '../actions/accountActions'


class AccountList extends React.Component {
 

  render () {
    return (
     <div className="container is-fluid">

       <div className="columns">
          <div className="column">
            <PostAccount/>
          </div>

          <div className="column is-three-fifths">
            <section className="section">
              <h2 className="title has-text-link is-5 small has-text-centered"> Latest Account of Income and Expenses</h2>
              <table className="table is-hoverable is-fullwidth is-narrow is-striped">
                <thead>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th>Title</th>
                    <th><abbr title="Won">Amount</abbr></th>
                    <th><abbr title="Drawn">Date</abbr></th>
                    <th><abbr title="Lost">Funds Type</abbr></th>
                    <th><abbr title="Goals for">Actions</abbr></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th><abbr title="Position">Pos</abbr></th>
                    <th>Title</th>
                    <th><abbr title="Won">Amount</abbr></th>
                    <th><abbr title="Drawn">Date</abbr></th>
                    <th><abbr title="Lost">Funds Type</abbr></th>
                    <th><abbr title="Goals for">Actions</abbr></th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                    </td>
                    <td className="">38</td>
                    <td>23</td>
                    <td></td>
                    <td>68</td>
                  </tr>
                  <tr className="is-primary is-selected">
                    <th>2</th>
                    <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                    <td>38</td>
                    <td>11</td>
                    <td>Income</td>
                    <td>65</td>

                  </tr>
                  <tr className="is-warning">
                    <th>3</th>
                    <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                    <td>38</td>
                    <td>13</td>
                    <td className="is-warning">Expense</td>
                    <td>69</td>
                  </tr>
                </tbody>
              </table>
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

const mapDispatchToProps = () => {
  return {
    getAccounts: () => dispatch(fetchAccounts())
  }
}

export default connect()(AccountList)
