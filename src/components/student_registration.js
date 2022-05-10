import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';

class StudentRegistrationPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            student_mail : '',
            student_name : '',
            password : '',
            isRegistrationSuccessful : false
        }
        this.submitStudentRegistration = this.submitStudentRegistration.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    

    submitStudentRegistration(event){
        console.log(this.state);
        event.preventDefault();
       // const token = this.getCookie('doctor_cookie');
       const headers = { 
        "Content-Type": "application/json" ,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    };
    
        
        
        axios.post('http://localhost:9091/studentregistration', this.state, { headers })
         .then(response => 
           {

            if(response.status===200){
                this.setState({isRegistrationSuccessFul : true});
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
        if(!this.state.isRegistrationSuccessFul){
            return (
                <div className="RegistrationPage">
                    <h1>STUDENT REGISTRATION </h1>
                    <Form onSubmit = {this.submitStudentRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicDoctorName">
                            <Form.Label>Enter mail</Form.Label>
                            <Form.Control required type="email" name="student_mail" value={this.state.student_mail} onChange={this.detailsChange} placeholder="Your mail" />
                        </Form.Group>
    
    
    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>student_name</Form.Label>
                            <Form.Control required type="text"  name="student_name" value={this.state.student_name} onChange={this.detailsChange} placeholder="Enter name" />
    
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.detailsChange} placeholder="Password" />
                        </Form.Group>
    
    
                        <Button size="lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                  
            );
        }
        else{
            return <Redirect to = {{ pathname: "/login-student" }} />;
        }

    }
}

export default StudentRegistrationPage;