import React, { useState,useEffect,useRef } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import FacultyLoginPage from './components/faculty_login.js';
import FacultyHomePage from './components/faculty_home_page';
import StudentLoginPage from './components/student_login.js';
import FacultyRegistrationPage from './components/faculty_registration';
import StudentRegistrationPage from './components/student_registration';
import ViewCoursesPage from './components/view_courses';
import ViewTasksUnderCoursePage from './components/view_tasks_under_course';
import ViewTaskPage from './components/view_task';
import CreateLabsPage from './components/createlabs';
import ViewLabsPage from './components/viewlabs';
import StudentCourseRegistrationPage from './components/student_course_registration';
import StudentHomePage from './components/student_home';
import { Redirect } from 'react-router';

let isLoggedIn = false;





const Home = () => {
  
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Welcome to IIIT B</h1>
      </section>
    </>
  );
};
const FacultyRegister= () => {
  return (
    <>
      <section className="hero-section">
        <FacultyRegistrationPage/>
      </section>
    </>
  );
};


const LoginFaculty = () => {
  return (
    <>
      <section className="hero-section">
        <FacultyLoginPage/>
      </section>
    </>
  );
};


const  FacultyHome = () => {
  return (
    <>
      <section className="hero-section">
        <FacultyHomePage/>
      </section>
    </>
  );
};

const  CreateLabs = () => {
  return (
    <>
      <section className="hero-section">
        <CreateLabsPage/>
      </section>
    </>
  );
};


const  ViewLabs = () => {
  return (
    <>
      <section className="hero-section">
        <ViewLabsPage/>
      </section>
    </>
  );
};


const LoginStudent = () => {
  return (
    <>
      <section className="hero-section">
        <StudentLoginPage/>
      </section>
    </>
  );
};


const StudentRegister= () => {
  return (
    <>
      <section className="hero-section">
        <StudentRegistrationPage/>
      </section>
    </>
  );
};

const  StudentHome = () => {
  return (
    <>
      <section className="hero-section">
        <StudentHomePage/>
      </section>
    </>
  );
};


const StudentCourseRegisteration= () => {
  return (
    <>
      <section className="hero-section">
        <StudentCourseRegistrationPage/>
      </section>
    </>
  );
};

const ViewCourses= () => {
  return (
    <>
      <section className="hero-section">
        <ViewCoursesPage/>
      </section>
    </>
  );
};

const ViewTasksUnderCourses= () => {
  return (
    <>
      <section className="hero-section">
        <ViewTasksUnderCoursePage/>
      </section>
    </>
  );
};

const ViewTask= () => {
  return (
    <>
      <section className="hero-section">
        <ViewTaskPage/>
      </section>
    </>
  );
};




const Logout= () => {
  return <Redirect to = {{ pathname: "/login-doctor" }} />;
  
};



const App = () => {






  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register-faculty">
        <FacultyRegister />
      </Route>

      <Route path="/login-faculty">
        <LoginFaculty />
      </Route>

      <Route path="/home-faculty/:isLoggedIn">
        <FacultyHome />
      </Route>

      <Route path="/create-labs/:isLoggedIn">
        <CreateLabs />
      </Route>

      <Route path="/view-labs/:isLoggedIn">
        <ViewLabs />
      </Route>

      <Route path="/login-student">
        <LoginStudent />
      </Route>

      <Route path="/register-student">
        <StudentRegister />
      </Route>
      
      <Route path="/student-home/:isLoggedIn">
        <StudentHome />
      </Route>

    
      <Route path="/student-course-registeration/:isLoggedIn">
        <StudentCourseRegisteration />
      </Route>

      <Route path="/view-courses/:student_mail">
        <ViewCourses />
      </Route>

      <Route path="/view-tasks-under-courses">
        <ViewTasksUnderCourses />
      </Route>
    
    </Switch>
  );
};

export default App;
