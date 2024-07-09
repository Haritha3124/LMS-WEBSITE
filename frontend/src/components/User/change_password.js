import React, { useState, useContext } from 'react';
import AuthContext from "../Course_Details/context";
import { toast, Flip } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const { authTokens, logoutUser } = useContext(AuthContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!", {
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
            return;
        }

        const response = await fetch("http://127.0.0.1:8000/api/change-password/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            },
            body: JSON.stringify({
                old_password: oldPassword,
                new_password: newPassword
            })
        });

        if (response.status === 200) {
            alert("Password Changed Successfully")
            toast.success("Password Changed Successfully!", {
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
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setTimeout(() => {
                logoutUser();
                navigate('/user-login');
            }, 2000);
        } else {
            alert("Error changing password!")
            toast.error("Error changing password!", {
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
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card my-5">
                        <h5 className="BackHeader card-header d-flex justify-content-center p-3">Change Password</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="password-old" className="form-label">Old Password:</label>
                                    <input type="password" className="form-control changepass" id="password-old" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password-new" className="form-label">New Password:</label>
                                    <input type="password" className="form-control changepass" id="password-new" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password-confirm" className="form-label">Confirm Password:</label>
                                    <input 
                                        type="password" className="form-control changepass" id="password-confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn custom-submit w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
