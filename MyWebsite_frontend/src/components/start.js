import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../App.css";
import course_pic from "./profile_2.jpg";
import { Button,  FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import ls from 'local-storage';
import web3 from "./web3";

class RealApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spec_key: ls.get('special_id'),
      course_name: "",
      university: "",
      issuer_name: "",
      issuer_desig: "",
      credential: 'sdfsdfswq123123',
      tran_hash: "",
      status: "not_make",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.submit = this.submit.bind(this);
    this.undo = this.undo.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  undo = () =>
  {
    this.setState({ status: "not_make" });
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (this.state.status === "not_make") {
      this.setState({ status: "make" });
    } else {
      this.setState({ status: "not_make" });
    }
  };




  submit = async (e) => {
    e.preventDefault();
const x = await ls.get('special_id');
    const input_string = `${x},${this.state.course_name},${this.state.university},${this.state.issuer_name},${this.state.issuer_desig},${this.state.credential}`;
    // console.log(input_string);
    this.setState({spec_key:x});
    try {
      const transaction_hash = await web3.eth.sendTransaction({
        from: "0x38643a6Ecee61Dba4ccfB4d65dEbb5A864aE0d72",
        to: '0xE29Eb101104C4863D0992f72Cf3B48887A982695',
        value: web3.utils.toWei("0.1", "ether"),
        gas:'32000',
        data: web3.utils.toHex(input_string),
      });
      // console.log(transaction_hash.transactionHash);
      this.setState({tran_hash:transaction_hash.transactionHash})
     
      axios
      .post("http://localhost:5000/course", this.state)
      .then((response) => {
    // console.log(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        alert('error please try again')
      });


    } catch (err) {
      alert('Transaction_failed . 1-possible you are not connected to metamask. 2-doesnt have enough ehtereum coins')
    }

    // console.log(this.state);





  };

  render() {
    // console.log(ls.get('special_id'));
    if (this.state.status === "not_make") {
      return (
        <div className='back_col'>
        <div className="container back_col">
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
              <div>
                <FormGroup>
                  <Label>Course_name</Label>
                  <br></br>
                  <Input
                    type="text"
                    name="course_name"
                    placeholder="course_name"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>University or Organisation</Label>
                  <Input
                    type="text"
                    name="university"
                    placeholder="university"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Issuer_name</Label>

                  <br></br>
                  <Input
                    type="text"
                    name="issuer_name"
                    placeholder="issuer_name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Issuer Designation</Label>
                  <Input
                    type="text"
                    name="issuer_desig"
                    placeholder="issuer_desig"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  type="submit"
                className="btn-log btn-dark btn-block "
                  onClick={this.submitHandler}
                >
                  Enroll
                </Button>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
    } else {
      return (
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
                onClick={this.submit}
              >
               create badge and completed the course
              </Button>
              <Button
                className="btn-log btn-dark btn-block"
                onClick={this.undo}
              >
               create new course
              </Button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default RealApp;
