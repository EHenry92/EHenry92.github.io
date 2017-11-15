import React, {Component} from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Projects, About, Home} from './components'
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
