//class Component
//Global State

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Salary from "./pages/Salary";
import Summary from "./pages/Summary";
import TenantForm from "./pages/TenantForm";
import ProgressBar from "./ProgressBar/ProgressBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      salary: 0,
      progress: 0,
    };
  }
  //A method to update the progress bar
  handleProgress = (e) => {
    const { fname, lname, email, phone, salary } = this.state;
    let progress = 0;
    if (fname !== "") {
      progress += 20;
    }
    if (lname !== "") {
      progress += 20;
    }
    if (email !== "") {
      progress += 20;
    }
    if (phone !== "") {
      progress += 20;
    }
    if (salary !== 0) {
      progress += 20;
    }
    this.setState({ progress: progress });
  };

  //update state from input
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleRadio = (salary) => {
    this.setState({ salary: salary });
  };

  render() {
    const { progress } = this.state;
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <TenantForm
                handleProgress={this.handleProgress}
                handleChange={this.handleChange}
              />
            </Route>
            <Route exact path="/salary">
              <Salary
                handleProgress={this.handleProgress}
                handleChange={this.handleRadio}
              />
            </Route>
            <Route exact path="/summary">
              <Summary state={this.state} />
            </Route>
          </Switch>
          <ProgressBar percent={progress} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
