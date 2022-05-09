import React,{Component} from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Redirect } from 'react-router';
import './doctorLogin.css';




class StudentLoginPage extends Component {


  constructor(props){
    super(props);
    this.state = {
      student_mail : '',
      password : '',
        isLoggedIn: false
    }
    this.submitStudentLogin = this.submitStudentLogin.bind(this);
    this.detailsChange = this.detailsChange.bind(this);
  }

  submitStudentLogin(event){
      console.log(this.state);
      event.preventDefault();
      const headers = { 
          "Content-Type": "application/json" ,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      };

      
      
      axios.post('http://172.16.134.190:9090/studentlogin', this.state, { headers })
      .then(response => 
        {
          if(response.status!=200){
            alert("Invalid Credentials!Enter correct credentials");
          }
          else{
            alert("Login Successful")
            this.setState({isLoggedIn : true});
            // //setting the cookie here
            // document.cookie = "doctor_cookie=" + response.data;
            // console.log("Doctor Cookie set");
            
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
          <h1>STUDENT LOGIN </h1>
          <Form onSubmit={this.submitStudentLogin}>
            <Form.Group size="lg" className="form" controlId="formBasicPatientUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                autoFocus
                type="email"
                value={this.state.student_mail}
                name = "student_mail"
                onChange={this.detailsChange}
                placeholder = "Email"
              />
            </Form.Group>
            <Form.Group size="lg" className="form" controlId="formBasicPatientPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={this.state.password}
                onChange={this.detailsChange}
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button size="lg" type="submit">
              Login
            </Button>
          </Form>
  
        </div>
       
      );
    }
    else{
      return     <Redirect to = {{ pathname: "/student-home/"+this.state.isLoggedIn , mail : this.state.student_mail}} />;

    }

  }

}

export default StudentLoginPage;