
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <>

        <Router>

          <Header />

          <Routes>



            < Navigate to="/" />

          </Routes>
        </Router>
      </>
    );
  }


}

export default App;
