import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class CreateLabsPage  extends Component{

    constructor(props){
        super(props);
        this.state = {
            description : '',
            faculty_mail : this.props.location.mail,
            course_name :'',
            file : null
        }
        this.createlab = this.createlab.bind(this);
       // this.handleFileSelect = this.handleFileSelect.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
    }

    createlab(event){
        event.preventDefault();
        console.log(this.props.location.mail);
        
        const formData = new FormData();
        formData.append("file", this.state.file);
      
        console.log(this.state.faculty_mail);
        
        formData.append("description", this.state.description);
        formData.append("course_name", this.state.course_name);
        formData.append("faculty_mail", this.state.faculty_mail);
       
       // const token = this.getCookie('doctor_cookie');
       const headers = { 
        "Content-Type": "multipart/form-data" ,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    };
   
        
        
        axios.post('http://localhost:9090/createlab', formData, { headers })
         .then(response => 
           {

            if(response.status===200){
                alert("Lab is added !!!");
            }
            else{
                alert("lab not added");
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

    handleFileSelect = event => {
        this.setState({ file: event.target.files[0] });
    
      }

    
    render(){
        if(this.props.match.params.isLoggedIn){
            return (
                <div className="RegistrationPage">
                    <h1>Create Labs </h1>
                    <Form onSubmit = {this.createlab}>

                        <Form.Group className="mb-3" controlId="formBasicDoctorName">
                            <Form.Label>description</Form.Label>
                            <Form.Control required type="text" name="description" value={this.state.description} onChange={this.detailsChange} placeholder="description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDoctorName">
                            <Form.Label>course_name</Form.Label>
                            <Form.Control required type="text" name="course_name" value={this.state.course_name} onChange={this.detailsChange} placeholder="course_name" />
                        </Form.Group>
    
                        <label  htmlFor="task">upload task</label><br/>
                        <input type="file" id="task"  onChange={this.handleFileSelect} /><br/><br/><br/>
                        
                        {/* <Button size="lg" variant="primary" onClick={}>
                            Upload
                        </Button> */}
                        <Button size="lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* <div> {this.fileData()}</div> */}
                </div>
                  
            );
        }
        else{
            return <Redirect to = {{ pathname: "/login-faculty"}} />;
        }

    }
}

const CreateConsentWithRouter = withRouter(CreateLabsPage);
export default CreateConsentWithRouter;