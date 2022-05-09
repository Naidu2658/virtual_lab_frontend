import React,{Component} from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Redirect } from 'react-router';
import './doctorLogin.css';




class FacultyLoginPage extends Component {


  constructor(props){
    super(props);
    this.state = {
        mail : '',
        password : '',
        isLoggedIn: false
    }
    this.submitFacultyLogin = this.submitFacultyLogin.bind(this);
    this.detailsChange = this.detailsChange.bind(this);
  }

  submitFacultyLogin(event){
      console.log(this.state);
      event.preventDefault();
      const headers = { 
          "Content-Type": "application/json" ,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      };

      
      
      axios.post('http://172.16.134.190:9090/facultylogin', this.state, { headers })
      .then(response => 
        {
          if(response.status!=200){
            alert("Invalid CredentialsPlease Enter the correct credentialss");
          }
          else{
            this.setState({isLoggedIn : true});
            alert("Login Successful")
          }
        }
      );
  }

  detailsChange(event){
      this.setState({
          [event.target.name]:event.target.value
      });
  }





  render(){
    if(!this.state.isLoggedIn){
      return (
        <div className="LoginPage">
          <h1>FACULTY LOGIN </h1>
          <Form onSubmit={this.submitFacultyLogin}>
            <Form.Group size="lg" className="form" controlId="formBasicPatientUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control required autoFocus type="text" value={this.state.mail}  name = "mail" onChange={this.detailsChange}  placeholder = "Email" />
            </Form.Group>
            <Form.Group size="lg" className="form" controlId="formBasicPatientPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  required type="password"  value={this.state.password} onChange={this.detailsChange} placeholder="Password" name="password" />
            </Form.Group>
            <Button size="lg" type="submit">
              Login
            </Button>
          </Form>
  
        </div>
       
      );
    }
    else{
      return (
     <>
     {/* {this.setState({isLoggedIn : true})} */}
     {console.log(this.state.isLoggedIn)}
    <Redirect to = {{ pathname: "/home-faculty/"+this.state.isLoggedIn , mail : this.state.mail}} /></>   );
    }

  }

}

export default FacultyLoginPage;