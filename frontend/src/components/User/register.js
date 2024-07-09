import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast, Flip } from "react-toastify";

function Register() {
    const [formData, setFormData] = useState({
        first_namename: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register/', formData)
            .then(response => {
                console.log('User registered:', response.data);
                toast.success("Registered successfully !", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                  });
                navigate('/user-login');
            })
            .catch(error => {
                console.error('Error registering user:', error);
                toast.error("Error registering user!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                });
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-10">
                    <div className="card mt-4 mb-4">
                        <h5 className="BackHeader card-header d-flex justify-content-center p-3">User Register</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control changepass" id="first_name" value={formData.first_name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control changepass" id="last_name" value={formData.last_name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control changepass" id="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control changepass" id="username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control changepass" id="password" value={formData.password} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn custom-submit d-block w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
