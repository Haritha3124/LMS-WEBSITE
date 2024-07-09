import {Link} from "react-router-dom";
import AuthContext from "../Course_Details/context";
import { useContext } from "react";
function Sidebar(){

    let {logoutUser} = useContext(AuthContext);

    return(
        <div className="card">
        <h5 className="card-header">Dashboard</h5> 
            <div className="list-group-flush">
                <Link to="/user-mycourses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/user-favourite_course" className="list-group-item list-group-item-action">Favorite Courses</Link>
                <Link to="/user-changepassword" className="list-group-item list-group-item-action ">Change Password</Link>
                <button className="list-group-item list-group-item-action" onClick={logoutUser}>Logout</button>
            </div>
    </div>
    );
}
    

export default Sidebar;