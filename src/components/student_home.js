import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class StudentHomePage  extends Component{

    constructor(props){
        super(props);
        this.state = {
           
        }
        this.detailsChange = this.detailsChange.bind(this);
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
                <div className="RegistrationPage">
                    <h1>Student Home Page</h1>
                  
                    {console.log(this.props.location.mail)}
                    
                        <Link to={{ pathname: "/student-course-registeration/"+this.props.match.params.isLoggedIn,   mail: (this.props.location.mail) }}>
                        <Button size="lg" variant="primary" >
                            Register for course
                        </Button>
                         </Link>
                         
                         <br></br>
                         
                         <Link to={{ pathname: "/view-courses/"+this.props.location.mail,   mail: (this.props.location.mail) }}>
                        <Button size="lg" variant="primary" >
                            View Courses
                        </Button>
                         </Link>
                </div>
        )
    }
}

const CreateConsentWithRouter = withRouter(StudentHomePage);
export default CreateConsentWithRouter;