import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { PostNewAccount } from '../actions/accountActions'
class PostAccount extends React.Component {
  state = {
    title:'',
    account_type: 'income',
    amount: null,
    date:'',
    description: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.postAccount({ account: this.state }, this.props.token)
     
      this.setState({
        title:'',
        account_type: '',
        amount: 0,
        date:'',
        description: ''
      })
    
  }


  render () {
    return (
      <section className=" section">
        <h2 className="title is-5 small has-text-primary has-text-centered"> Enter a New Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field control is-two-thirds">
                <input className="input" name="title" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Title for expense of income"/>
              </div>

              <div className="field control is-narrow">
                <div className="select is-fullwidth">
                  <select name="account_type" onChange={this.handleChange} value={this.state.account_type}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              
              <div className="field control is-narrow">
                <input className="input" name="amount" onChange={this.handleChange} value={this.state.amount} type="number" placeholder="Amount"/>
              </div>
              <div className="field control is-narrows">
                <input className="input" name="date" onChange={this.handleChange} value={this.state.date} type="date" placeholder="Date"/>
              </div>

            </div>
          </div>

        
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field control">
                <textarea className="textarea" name="description" onChange={this.handleChange} value={this.state.description} type="text" placeholder="Describe the details of funds source or expense">

                </textarea>
              </div>
            </div>

          </div>

            <div className="">
            <button  type="submit" className="button is-right is-primary">
              Submit Account
            </button>
            </div>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    postAccount: (userData,token) => dispatch(PostNewAccount(userData,token))
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.Account.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAccount)
