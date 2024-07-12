import {Link} from 'react-router-dom';
import AuthContext from './Course_Details/context';
import { useContext } from 'react';
function Header() {
  let {logoutUser} = useContext(AuthContext);
    return (
      <nav className="navbar navbar-expand-lg navbar-custom p-3" >
        <div className="container-fluid ">
          <Link className="navbar-brand mx-5 mt-2" to="/">Learning Management System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5 " id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/user-mycourses" className="nav-link">My Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/user-favourite_course">Favourite Courses</Link></li>
                  <li><Link className="dropdown-item" to="/user-changepassword">Change Password</Link></li>
                  <li><button className="dropdown-item" onClick={logoutUser}>Logout</button></li> 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;