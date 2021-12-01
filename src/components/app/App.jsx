
import React, { Component } from 'react';
import Header from '../app/containers/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';




class App extends Component {
  render() {

    return (
      <>

        <Router>
          <div>

            <Header />

            <Switch>
              <Route exact path="/" />



              <Redirect to="/" />

            </Switch>
          </div>
        </Router>
      </>
    );
  }


}

export default App;