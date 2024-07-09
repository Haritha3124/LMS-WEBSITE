import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ChangePassword from './User/change_password';
import Register from './User/register';
import MyCourses from './User/mycourses';
import FavouriteCourse from './User/favourite_course';
import Footer from './footer';
import { AuthProvider } from './Course_Details/context';
import PrivateRoute from './utils/privateroute';

function Main() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute element={Home} />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/python" element={<Python />} />
          <Route path="/c" element={<C />} />
          <Route path="/mysql" element={<MySql />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/mongodb" element={<Mongodb />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/r" element={<R />} />
          <Route path="/java" element={<Java />} />
          <Route path="/php" element={<Php />} />
          <Route path="/user-changepassword" element={<PrivateRoute element={ChangePassword}/>} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/user-mycourses" element={<PrivateRoute element={MyCourses} />} />
          <Route path="/user-favourite_course" element={<PrivateRoute element={FavouriteCourse} />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default Main;
