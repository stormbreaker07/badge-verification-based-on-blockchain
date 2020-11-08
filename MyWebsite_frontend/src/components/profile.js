import React, { Component } from "react";
import profile_photo from "./profile_1.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../App.css";
import NavBar from "./Navbar";
import { Button,  FormGroup, Label, Input } from "reactstrap";
import ls from 'local-storage';
import axios from 'axios';



class Profile extends Component {
  
constructor(props) {
  super(props)

  this.state={
    id: this.props.data.id,
    course:[],
    clicke:'no'
  }

  // console.log(this.props)
  this.get_data = this.get_data.bind(this)
}



get_data = (e) => {
  e.preventDefault();
  const x = `sp_key=${ls.get('special_id')}`;
// console.log(x)
  axios
      .get(`http://localhost:5000/course/${x}`)
      .then((response) => {
        // console.log(response.data)
        this.setState({
          course:response.data,
          clicke:'yes'
        })
      })
      .catch((error) => {
        // console.log('err')
      });
  };




  render() {
    
    const { course, errorMsg } = this.state;
if(this.state.clicke === 'no')
  {return (
    <div className="container">
      <div className="py-4">
        <h1>Profile</h1>
        <img
          src={profile_photo}
          width="300"
          height="190"
          alt="Italian Trulli"
        ></img>
        <br></br>
        <br></br>
        <Button
                className="btn-log btn-dark btn-block"
                onClick={this.get_data}
              >
              Get Data
              </Button>
       {/* <div>
       List of posts
				{course.length ? course.map(course => <div key={course.id}>{course.title}</div>):null}
        {errorMsg ? <div>{errorMsg}</div> : null}
        </div> */}
      </div>
    </div>
  );
  }
  else{
    return(
      <div className = 'course container py-4 back_col'>
      <div className="users">
        {this.state.course.map((course, index) => (
          <div key={index}>
            <h3> <spam className="font-weight-bold">Course Name : </spam>{course.course_name}</h3>
            <h3> <spam className="font-weight-bold">transaction_id : </spam>{course.tran_hash}</h3>
            <hr></hr><hr></hr>
          </div>
        ))}
      </div>
      <Button
                className="btn-log btn-dark btn-block"
                onClick={this.get_data}
              >
              Get Data
              </Button>
      </div>
    )
  }
}}

export default Profile;
