import React, { useContext } from 'react';
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
import ProfileSettings from './User/profile_setting';
import ChangePassword from './User/change_password';
import Register from './User/register';
import Dashboard from './User/dashboard';
import MyCourses from './User/mycourses';
import FavouriteCourse from './User/favourite_course';
import About from './about';
import Footer from './footer';
import AuthContext, { AuthProvider } from './Course_Details/context';
import PrivateRoute from './utils/privateroute';

function Main() {
  let { loguser } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user-login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/python" element={<PrivateRoute authenticated={loguser} element={Python} />}></Route>
          <Route path="/c" element={<C />}></Route>
          <Route path="/mysql" element={<MySql />}></Route>
          <Route path="/html" element={<PrivateRoute authenticated={loguser} element={Html} />}></Route>
          <Route path="/css" element={<PrivateRoute authenticated={loguser} element={Css} />}></Route>
          <Route path="/mongodb" element={<PrivateRoute authenticated={loguser} element={Mongodb} />}></Route>
          <Route path="/javascript" element={<PrivateRoute authenticated={loguser} element={Javascript} />}></Route>
          <Route path="/r" element={<PrivateRoute authenticated={loguser} element={R} />}></Route>
          <Route path="/java" element={<Java />}></Route>
          <Route path="/php" element={<PrivateRoute authenticated={loguser} element={Php} />}></Route>
          <Route path="/profile-setting" element={<PrivateRoute authenticated={loguser} element={ProfileSettings} />}></Route>
          <Route path="/user-changepassword" element={<PrivateRoute authenticated={loguser} element={ChangePassword} />}></Route>
          <Route path="/user-register" element={<Register />}></Route>
          <Route path="/user-dashboard" element={<PrivateRoute authenticated={loguser} element={Dashboard} />}></Route>
          <Route path="/user-mycourses" element={<PrivateRoute authenticated={loguser} element={MyCourses} />}></Route>
          <Route path="/user-favourite_course" element={<PrivateRoute authenticated={loguser} element={FavouriteCourse} />}></Route>
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default Main;
