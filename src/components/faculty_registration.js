import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';

class FacultyRegistrationPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            faculty_name : '',
            faculty_email : '',
            faculty_password : '',
            isRegistrationSuccessful : false
        }
        this.submitDoctorRegistration = this.submitDoctorRegistration.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    

    submitDoctorRegistration(event){
        console.log(this.state);
        event.preventDefault();
       // const token = this.getCookie('doctor_cookie');
       const headers = { 
        "Content-Type": "application/json" ,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    };
    
        
        
        axios.post('http://172.16.134.190:9090/registerfaculty', this.state, { headers })
         .then(response => 
           {

            if(response.status===200){
                this.setState({isRegistrationSuccessful : true});
                alert("Registration Successful!! Kindly Login Now");
            }
            else{
                alert("Wrong Details Entered.Enter Correct details");
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
        if(!this.state.isRegistrationSuccessful){
            return (
                <div className="RegistrationPage">
                    <h1>FACULTY REGISTRATION </h1>
                    <Form onSubmit = {this.submitDoctorRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicDoctorName">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control required type="text" name="faculty_name" value={this.state.faculty_name} onChange={this.detailsChange} placeholder="Your Name" />
                        </Form.Group>
    
    
    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name="faculty_email" value={this.state.faculty_email} onChange={this.detailsChange} placeholder="Enter Email" />
    
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="faculty_password" value={this.state.faculty_password} onChange={this.detailsChange} placeholder="Password" />
                        </Form.Group>
    
    
                        <Button size="lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                  
            );
        }
        else{
            return <Redirect to = {{ pathname: "/login-faculty" }} />;
        }

    }
}

export default FacultyRegistrationPage;