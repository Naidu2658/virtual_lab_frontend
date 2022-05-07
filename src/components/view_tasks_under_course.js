import React,{Component} from 'react'
import './registration.css';
import { Redirect } from 'react-router';
import {Form ,Button} from 'react-bootstrap'
import axios from 'axios';
import PropTypes from "prop-types";
class ViewTasksUnderCoursePage extends Component{

    constructor(props){
        super(props);
        this.state = {
          resp : "",
        }
        this.submithandl = this.submithandl.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
      }
      static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
   
    
      componentDidMount(){
        console.log("Did Mount")
        
          // axios.get('http://localhost:8087/view-tasks'+this.props.student_mail+this.props.course_name,{
          //   headers: {
          //     'Authorization': `Bearer ${token}`
          //   }
          // })
          // .then(response => 
          //   {
          //     if(response.status===200){
          //        // alert("Registered successfully "+response.data);
          //         this.setState({resp: response.data});
          //         console.log("Responmse")
          //         console.log(this.state.resp);
          //     }
          //     else{
          //         alert("Error")
          //     }
          //     console.log("return post method");
          //     //console.log(response);
          //      console.log(response);
          //     // xPaths = response.data.xPaths;
          //   }
          // );
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
        console.log("Render");
          if(this.state.resp.hospitalRecords!=undefined){
            return (  
              <div>
                {console.log("print "+this.props.match.params.requestId)}
                 <div className="accordion">
                    {this.state.resp.hospitalRecords.map(({hospitalName , hospitalId, episodes  }) => (
                      
                     // <Createconsent_accrodian ehr_id={this.state.resp.ehrId} title= {hospitalName} dataCustodianId={hospitalId}  content={episodes} id={this.props.match.params.requestId} />
                     <div className="accordion-item">
                     <div className="form-floating mt-3 mb-3 text-center">
               
                       {console.log("hello ")}
                       {console.log( this.state.languages)}
               
                     </div>
                     <div className="accordion-title" name="isActive" onClick={this.detailsChange}>
                       <div>{hospitalName}</div>
                       <div>{this.state.isActive ? '-' : '+'}</div>
                     </div>
                     {
                       this.state.isActive && <div className="accordion-content">
                       {
                         episodes.map(({encounters , episodeId, episodeName  }) => (
                           <div>
                             <h3>Episodes:</h3>
                                   <li className="episodes">Episode Id : {episodeId}</li>
                                   <li className="episodes">Episode Name : {episodeName}</li>
                             {
                               encounters.map(({doctorName,encounterId,op_records})=>(
                                 <div>
                                   <h3 className="episodes">Encounters :</h3>  
               
                                   
                                   <li className="encounter">Doctor Name : {doctorName}</li>
                                   <li className="encounter">Encounter Id : {encounterId}</li>
                                   {
                                         op_records.map(({diagnosis,op_record_id,recordDetails,timestamp})=>(
                                           <div>
                                             <h3 className="encounter">OpRecords:</h3>
                                             <li className="op_records">Diagnosis : {diagnosis}</li>
                                             <li className="op_records">Op Record Id : {op_record_id}</li>
                                             <li className="op_records">Details : {recordDetails}</li>
                                             <li className="op_records">Timestamp : {timestamp}</li>                                          
                                           </div>
                                         ))
                                   }
                                 </div>
                               ))
                             }
                           </div>
                         ))
                       }
                       </div>
                     } 
                     
                   </div>
                   
                   ))}
                </div>
               
              </div>
            );
          }
          else{
            return <h1>No data</h1>
          }
      }
    
}

export default ViewTasksUnderCoursePage;