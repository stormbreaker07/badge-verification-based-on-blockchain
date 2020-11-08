import React from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import ls from "local-storage";
import web3 from "./web3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      Name: "",
      data: {},
      acct_verified: "no",
      badge_varified: "no",
      hash: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.Badge_verifier = this.Badge_verifier.bind(this);
    this.get_data = this.get_data.bind(this);
  }

  get_data = (e) => {
    const x = `sp_key=${this.state.data.spec_id}`;

    axios
      .get(`http://localhost:5000/course/${x}`)
      .then((response) => {
        this.setState({ data: response.data[0] });
      })
      .catch((error) => {});
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler = (e) => {
    axios
      .post("http://localhost:5000/verify", this.state)
      .then((response) => {
        if (response.data.verify === "yes") {
          this.setState({ acct_verified: "yes" });
          this.setState({ data: response.data });
          this.setState({ Name: response.data.Name });
          console.log(this.state.Name);
          //console.log(response.data)
        } else {
          this.setState({ acct_verified: "no" });
          alert("WRONG PASSWORD");
        }
      })
      .catch((error) => {
        //console.log(error);
        alert("WRONG EMAIL ID");
      });
  };

  Badge_verifier = async (e) => {
    e.preventDefault();

    try {
      const transaction_detail = await web3.eth.getTransaction(this.state.hash);
      const input_string = web3.utils.hexToUtf8(transaction_detail.input);
      let res = input_string.split(",");
      if (res[0] === this.state.data.spec_id) {
        this.setState({ badge_varified: "yes" });
        let x = `sp_key=${this.state.data.spec_id}`;

        axios
          .get(`http://localhost:5000/course/${x}`)
          .then((response) => {
            this.setState({ data: response.data[0] });
          })
          .catch((error) => {});
      } else {
        this.setState({ badge_varified: "no" });
        alert("YOUR HASH IS NOT MACHING");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if (this.state.acct_verified === "no") {
      return (
        <div>
          <form className="login-form">
            <h2>BADGE VEIFIER</h2>
            <br />
            <br />
            <br />
            <div className="box-shadow container py-4">
              <FormGroup>
                <Label>Email</Label>

                <br></br>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>password</Label>
                <br></br>
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                className="btn-log btn-dark btn-block "
                onClick={this.submitHandler}
              >
                Verify Account
              </Button>
            </div>
          </form>
        </div>
      );
    } else {
      if (this.state.badge_varified === "no") {
        return (
          <div>
            {/* <div> first check verified</div> */}
            <form className="login-form">
              <FormGroup>
                <Label>Transaction_id</Label>

                <br></br>
                <Input
                  type="hash"
                  name="hash"
                  placeholder="hash"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                className="btn-log btn-dark btn-block "
                onClick={this.Badge_verifier}
              >
                Verify Badge Information
              </Button>
            </form>
          </div>
        );
      } else {
        return (
          <div className="container ">
            <h1 className="font-weight-bold">Your Badge Is Verified</h1>
            <hr></hr>
            <div className="box-still container py-4 body-color">
              <h2>
                <spam className="font-weight-bold">COURSE NAME : </spam>
                {this.state.data.course_name}
              </h2>
              <h2>
                <spam className="font-weight-bold">UNIVERSITY : </spam>
                {this.state.data.university}
              </h2>
              <h2>
                <spam className="font-weight-bold">ISSUER NAME : </spam>
                {this.state.data.issuer_name}
              </h2>
              <h2>
                <spam className="font-weight-bold">ISSUER DESIGNATION : </spam>
                {this.state.data.issuer_desig}
              </h2>
              <h2>
                <spam className="font-weight-bold">CEDENTIAL : </spam>
                {this.state.data.credential}
              </h2>
              <h2>
                <spam className="font-weight-bold">DATE OF ISSUING : </spam>
                {this.state.data.date}
              </h2>
            </div>
          </div>
        );
      }
    }
  }
}

export default App;
