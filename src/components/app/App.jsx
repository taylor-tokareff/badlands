
import React, { Component } from 'react';
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

          <Header />

          <Switch>



            <Redirect to="/" />

          </Switch>
        </Router>
      </>
    );
  }


}

export default App;
