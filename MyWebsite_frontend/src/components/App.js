import React from 'react';
import '../App.css';
import {Button , Form , FormGroup , Label , Input} from 'reactstrap';
import Realone from './realone';
import axios from 'axios';
import ls from 'local-storage';


class App extends React.Component {


  constructor() {
    super()
    this.state = {
      Name:"",
      phone:"",
      email:"",
      password:"" ,
      signinstatus :"false"
    }
    
    if(ls.get('signinInfo') === "")
    {ls.set('signinInfo', "false");}


    if(ls.get('special_id') === "")
    {ls.set('special_id', "");}
    

    this.handleChange = this.handleChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }


  handleChange = (event) => {

    const {name , value} = event.target
    this.setState({
      [name]: value
    })
  }

  

	submitHandler = e => {
		e.preventDefault()
    if(this.state.signinstatus === 'false')
    {
      this.setState({signinstatus : 'true'});
      ls.set('signinInfo', "true");
    }
    else
    {
      this.setState({signinstatus : 'false'});
      ls.set('signinInfo', "false");
    }
    //console.log(this.state)
		axios.post('http://localhost:5000/posts', this.state)
			.then(response => {
        ls.set('special_id',response.data._id)
        console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}


  render() {
    if(ls.get('signinInfo') === "false")
    {return (
      <div className='backgrd' >
      <form className='login-form' > 
        <h1>
          <spam className= "font-weight-bold">MyWebsite</spam>.com
        </h1>
        <h2 className='text-center'>welcome</h2>
       <br /><br /><br />
        <div className="box-shadow container py-4">
        <FormGroup>
          <Label>Full Name</Label>
          <br></br>
          <Input type="text" name="Name" placeholder="Name" onChange={this.handleChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label>Phone Number</Label>
          <Input type="text" name="phone" placeholder="Number" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>

          <br></br>
          <Input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <br></br>
          <Input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
        </FormGroup>
        <Button type='submit' className="btn-log btn-dark btn-block " onClick={this.submitHandler}  >Sign up</Button>
        </div>

         </form>
         </div>
    )
  }
  else
  {
  return (
  <div>
    <Realone  imp_id={ls.get('special_id')}/>
  </div>
  )
  }

  }

}

export default App;
