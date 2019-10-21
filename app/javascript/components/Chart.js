import React from "react"
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import PropTypes from "prop-types"
class Chart extends React.Component {
  render () {
    const { accounts } = this.props
    const graphic = {
      id: '1',
      
      labels: accounts.map(account => moment(account.created_at).format("MMM Do YY")),
      datasets: [{
          label: 'Income',
          data: accounts.filter(account => account.account_type === 'income').map(income => income.amount),
          backgroundColor: 'rgba(0,209,180,0.2)'
          
        },{
          label: 'Expense',
          data: accounts.filter(account => account.account_type === 'expense').map(expense => expense.amount),
          backgroundColor: 'rgba(225,220,109,0.3)'
        }
      ]
    }

    return (
      < Line
      data={graphic}
      // options={chartOptions}
      height={50}
      width={200}
      />
    );
  }
}

export default Chart
