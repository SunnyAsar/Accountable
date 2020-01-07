import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AccountList from "./AccountList"
import Account from "./Account"
import History from "./History"
import Home from './Home'
import PostInvoice from './PostInvoice'
import store from '../reducers/index'


class App extends React.Component {
  render () {
    store.dispatch({type: 'TOKEN', payload: this.props.authenticity_token})
    const token = this.props.authenticity_token
    return (
      <Provider store={store}>
        <Router>
        {/* <Link to='/account'>Account</Link> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account}/>
          <Route path='/transactions' component={History}/>
          <Route path='/invoice/new' component={PostInvoice}/>
        </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
