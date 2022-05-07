import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
class ViewCoursesPage extends Component{

    constructor(props){
        super(props);
        this.state = {
          resp : "",
        }
        this.detailsChange = this.detailsChange.bind(this);
      }
      static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
   
    
      componentDidMount(){
        console.log("Did Mount")
        
          axios.get('http://localhost:9090/viewcourses/'+this.props.match.params.student_mail)
          .then(response => 
            {
              if(response.status===200){
                 // alert("Registered successfully "+response.data);
                  this.setState({resp: response.data});
                  console.log("Responmse")
                  console.log(this.state.resp);
              }
              else{
                  alert("Error")
              }
              console.log("return post method");
              //console.log(response);
               console.log(response);
            }
          );
      }
    
    
    
         
        myStyle = {
          color: this.props.mode ==='dark'?'white':'#042743',
          backgroundColor: this.props.mode ==='dark'?'rgb(36 74 104)':'white', 
        };
    
        detailsChange(event){
          this.setState({
              [event.target.name]:event.target.value
          });
      }
    
      
      render(){
            return (  
              <div>
                {console.log(this.props.match.params.student_mail)}
                 <div>
                    {/* {this.state.resp.courses.map((item) => (
                    
                     <Link to="/view-tasks-under-courses"><Button>{item}</Button></Link>
                   
                   ))} */}
                </div>
               
              </div>
            );
          }
      }
    



const CreateConsentWithRouter = withRouter(ViewCoursesPage);
export default CreateConsentWithRouter;