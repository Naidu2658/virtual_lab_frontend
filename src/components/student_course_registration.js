import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class StudentCourseRegistrationPage  extends Component{

    constructor(props){
        super(props);
        this.state = {
            student_mail : this.props.location.mail,
            course : ''
        }
        this.submitCourseRegister=this.submitCourseRegister.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    submitCourseRegister(event){
        console.log(this.state);
        event.preventDefault();
        const headers = { 
            "Content-Type": "application/json" ,
            "Access-Control-Allow-Origin": "http://localhost:9090",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        };
  
        
        
        axios.post('http://172.16.134.190:9090/studentcourseregistration', this.state, { headers })
        .then(response => 
          {
              console.log(response);
            if(response.data==="yes"){
              alert("course added");
            }
            else{
              this.setState({isLoggedIn : true});
              alert("course already added");
            }
          }
        );
    }

    detailsChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

    render(){
        return(
                
                    
                    <div className="LoginPage">
                        <h1>Student Course Registration Page</h1>
         
          <Form onSubmit={this.submitCourseRegister}>
            <Form.Group size="lg" className="form" controlId="formBasicPatientUsername">
              <Form.Label>Course name</Form.Label>
              <Form.Control required autoFocus type="text" value={this.state.course}  name = "course" onChange={this.detailsChange}  placeholder = "course name" />
            </Form.Group>
           
            <Button size="lg" type="submit">
              Register
            </Button>
          </Form>
  
        </div>
        )
    }
}

const CreateConsentWithRouter = withRouter(StudentCourseRegistrationPage);
export default CreateConsentWithRouter;