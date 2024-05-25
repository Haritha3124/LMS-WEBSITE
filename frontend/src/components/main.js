import Header from './header';
import Home from './home';
import Python from './Course_Details/python';
import C from './Course_Details/c';
import MySql from './Course_Details/my_sql';
import Html from './Course_Details/html';
import Css from './Course_Details/css';
import Mongodb from './Course_Details/mongodb';
import Javascript from './Course_Details/javascript';
import R from './Course_Details/r';
import Java from './Course_Details/java';
import Php from './Course_Details/php';
import Login from './User/login';
import ProfileSettings from './User/profile_setting';
import ChangePassword from './User/change_password';
import Register from './User/register';
import Dashboard from './User/dashboard';
import MyCourses from './User/mycourses';
import FavouriteCourse from './User/favourite_course';
import About from './about';
import Footer from './footer';
import authContext from './Course_Details/context';
import PrivateRoute from './utils/privateroute';
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';



function Main() {
  const [course,setCourse] = useState([]);
    return (
      <authContext.Provider value={{user:course , setCourse}}>
      <div className="App">
        < Header/>
        <Routes>
          <PrivateRoute path="/" element={<Home />}></PrivateRoute>
          <PrivateRoute path="/about" element={<About />}></PrivateRoute>
          <PrivateRoute path="/python" element={<Python />}></PrivateRoute>
          <PrivateRoute path="/c" element={<C />}></PrivateRoute>
          <PrivateRoute path="/mysql" element={<MySql />}></PrivateRoute>
          <PrivateRoute path="/html" element={<Html />}></PrivateRoute>
          <PrivateRoute path="/css" element={<Css />}></PrivateRoute>
          <PrivateRoute path="/mongodb" element={<Mongodb />}></PrivateRoute>
          <PrivateRoute path="/javascript" element={<Javascript />}></PrivateRoute>
          <PrivateRoute path="/r" element={<R />}></PrivateRoute>
          <PrivateRoute path="/java" element={<Java />}></PrivateRoute>
          <PrivateRoute path="/php" element={<Php />}></PrivateRoute>
          <PrivateRoute path="/user-login" element={<Login />}></PrivateRoute>
          <PrivateRoute path='/profile-setting' element={<ProfileSettings/>}></PrivateRoute>
          <PrivateRoute path='/user-changepassword' element={<ChangePassword/>} ></PrivateRoute>
          <PrivateRoute path="/user-register" element={<Register />}></PrivateRoute>
          <PrivateRoute path="/user-dashboard" element={<Dashboard />}></PrivateRoute>
          <PrivateRoute path="/user-mycourses" element={<MyCourses />}></PrivateRoute>
          <PrivateRoute path="/user-favourite_course" element={<FavouriteCourse />}></PrivateRoute>
        </Routes>
        <Footer />
      </div>
      </authContext.Provider>
    );
  }
  
  export default Main;