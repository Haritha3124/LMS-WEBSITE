// import {Link} from "react-router-dom";

function Register(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-2">
                    <div className="card">
                        <h5 className="card-header mt-5">User Register</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">User Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Interests</label>
                                <textarea className="form-control"></textarea>
                                <div className="form-text">Java, Python, Java Script, etc...</div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button> 
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;