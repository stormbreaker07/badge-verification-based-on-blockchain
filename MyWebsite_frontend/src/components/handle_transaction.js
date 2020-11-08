import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../App.css";
import NavBar from "./Navbar";
import Profile from "./profile";
import course_pic from "./profile_2.jpg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import web3 from "./web3";

class transaction_handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "nothing happening",
      hash: "",
      data_inherit: this.props,
      input_message:""
    };
  }

  submit = async (e) => {
    e.preventDefault();

    const input_string = `${this.data_inherit.name}=${this.data_inherit.spec_key}=${this.data_inherit.course}=${this.data_inherit.university}=${this.data_inherit.issuer_name}=${this.data_inherit.issuer_desig}=${this.data_inherit.credential}`;

    const accounts = await web3.eth.getAccounts();
    const acct1_balance = await web3.eth.getBalance(accounts[0]);
    const acct2_balance = await web3.eth.getBalance(accounts[1]);

    try {
      const transaction_hash = await web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[1],
        value: web3.utils.toWei("0.1", "ether"),
        data: web3.utils.toHex(input_string),
      });
      this.setState({ message: "ya transaction is happend" });
      console.log(transaction_hash);
      this.setState({ hash: transaction_hash });
    } catch (err) {
      console.log(err);
    }

    if (acct1_balance <= acct2_balance) {
      try {
        const transaction = await web3.eth.sendTransaction({
          from: accounts[1],
          to: accounts[0],
          value: web3.utils.toWei(acct2_balance - acct1_balance, "ether"),
          data: web3.utils.toHex(
            "its a message in response to check that it should work"
          ),
        });
        this.setState({ message: "ya transaction is happend" });
      } catch (err) {
        console.log(err);
      }
    }
  };

  // extract_data = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const transaction_detail = await web3.eth.getTransaction(this.state.hash);
  //     console.log(transaction_detail);
  //     const data = web3.utils.hexToUtf8(transaction_detail.input);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  render() {
    console.log(this.state.data_inherit.data_inherit);
    const input_string = `${this.state.data_inherit.data_inherit.spec_key}=${this.state.data_inherit.data_inherit.course}=${this.state.data_inherit.data_inherit.university}=${this.state.data_inherit.data_inherit.issuer_name}=${this.state.data_inherit.data_inherit.issuer_desig}=${this.state.data_inherit.data_inherit.credential}`;
    console.log(input_string);

    return (
      <div>
        <div className="container">
          <div className="py-4">
            <h1>Course</h1>
            <img
              src={course_pic}
              width="950"
              height="500"
              alt="Italian Trulli"
              className="center"
            ></img>

            <form className="login-form">
              <Button
                className="btn-log btn-dark btn-block"
                onClick={this.submitHandler}
              >
                completed the course
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default transaction_handler;
