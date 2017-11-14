import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Projects,About} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/work" component={Projects} />
            <Route component={About} />

          </Switch>
        </Main>
      </Router>
    )
  }
}
