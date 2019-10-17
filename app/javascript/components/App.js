import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AccountList from "./AccountList"
import Account from "./Account"
import store from '../reducers/index'


class App extends React.Component {
  render () {
    store.dispatch({type: 'TOKEN', payload: this.props.authenticity_token})
    const token = this.props.authenticity_token
    return (
      <Provider store={store}>
        <Router>
        <Link to='/account'>Account</Link>
        <Switch>
          <Route exact path='/' component={AccountList} />
          <Route path='/account' component={Account}/>
        </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
