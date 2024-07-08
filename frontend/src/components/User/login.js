import React, { useContext } from 'react';
import AuthContext from "../Course_Details/context";
import { Link } from 'react-router-dom';

function Login() {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-10">
                    <div className="card mt-5">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                            <form onSubmit={loginUser} autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control" name="username" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <Link to="/user-register" className='float-end me-3'>Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
