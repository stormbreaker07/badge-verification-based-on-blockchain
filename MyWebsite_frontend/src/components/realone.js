import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../App.css";
import NavBar from "./Navbar";
import Profile from "./profile";
import Home from "./start";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ls from 'local-storage';
import App from './App';



class Realone extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      id : this.props.imp_id,
      signIn:'true'   
    }
this.undo_local = this.undo_local.bind(this)
  }

  undo_local = () => {
 //console.log('inside it')
    ls.set('special_id', "");
    ls.set('signinInfo', "false")
    this.setState({signIn:'false'})
  }
  
  render() {
    if(this.state.signIn === 'true')
    {
  return (
    <div  className="App back_col">
      <Router>
        <div>
          <NavBar />
          <Button className="logOut btn-log btn-dark"  onClick={this.undo_local}>Logout</Button>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} data={this.state} />}
            />
            <Route
              exact
              path="/profile"
              render={(props) => <Profile {...props} data={this.state} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
    }
    else
    {
      return(
      <App/>
      )
    }
}
}

export default Realone;
