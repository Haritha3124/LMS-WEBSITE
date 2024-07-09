import React, { useContext } from 'react';
import AuthContext from "../Course_Details/context";
import { Link } from 'react-router-dom';

function Login() {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center " style={{height:"80vh"}}>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <h5 className="card-header text-center BackHeader">User Login</h5>
                        <div className="card-body">
                            <form onSubmit={loginUser} autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control changepass" name="username" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control changepass" name="password" id="password" required />
                                </div>
                                <button type="submit" className="btn custom-submit d-block w-100">Login</button>
                                <Link to="/user-register" className='mt-3 d-block text-center' style={{color:"#6a1b9a"}}>Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
