// import {Link} from "react-router-dom";

function ChangePassword(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-2">
                    <div className="card">
                        <h5 className="card-header mt-5">Change Password</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="password-old" className="form-label">Old Password:</label>
                                <input type="password-old" className="form-control" id="password-old" aria-describedby="password"/>
                            </div>
                            <div className="mb-3">
                                <label for="password-new" className="form-label">New Password:</label>
                                <input type="password-new" className="form-control" id="password-new" aria-describedby="password"/>
                            </div>
                            <div className="mb-3">
                                <label for="password-conform" className="form-label">Conform Password:</label>
                                <input type="password-conform" className="form-control" id="password-conform" aria-describedby="password"/>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;