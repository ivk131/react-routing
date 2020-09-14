import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from "./company_logo.png";

function App() {
  return (
    <div className='app'>
      <div className='app__left'>
        <img
          src={logo}
          alt=''
          className='app_leftlogo'
          width='390x'
          height='300px'
        />
      </div>

      <div className='app__right'>
        <Router>
          <div>
            <Route path='/' exact component={SignUp}></Route>

            <Switch>
              <Route path='/react-routing' exact component={SignUp}></Route>
            </Switch>
            <Route path='/signin' component={SignIn}></Route>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
