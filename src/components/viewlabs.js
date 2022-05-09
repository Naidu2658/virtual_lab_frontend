import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class ViewLabsPage  extends Component{

    constructor(props){
        super(props);
        this.state = {
            course_name : '',
            faculty_mail:(this.props.location.mail)
        }
        this.viewlabs = this.viewlabs.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    viewlabs(event){
        
        event.preventDefault();
       
        console.log(this.state);
        console.log(typeof this.props.location.mail);
       // const token = this.getCookie('doctor_cookie');
       const headers = { 
        "Content-Type": "application/json" ,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    };
    
        
        
        axios.get('http://172.16.134.190:9090/viewlab/'+this.state.course_name+'/'+this.state.faculty_mail, { headers })
         .then(response => 
           {
               console.log(response.data);

            if(response.status===200){
                alert("viewing labs");
            }
            else{
                alert("not viewing  sd labs");
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
        if(this.props.match.params.isLoggedIn){
            return (
                <div className="RegistrationPage">
                    <h1>View Labs </h1>
                    <Form onSubmit = {this.viewlabs}>
                        <Form.Group className="mb-3" controlId="formBasicDoctorName">
                            <Form.Label>Enter Course Name</Form.Label>
                            <Form.Control required type="text" name="course_name" value={this.state.course_name} onChange={this.detailsChange} placeholder="Course Name" />
                        </Form.Group>
    
                 
                        <Button size="lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                  
            );
        }
        else{
            return <Redirect to = {{ pathname: "/login-faculty"}} />;
        }

    }
}

const CreateConsentWithRouter = withRouter(ViewLabsPage);
export default CreateConsentWithRouter;