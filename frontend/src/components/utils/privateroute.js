import { Route, Redirect } from "react-router-dom";

function PrivateRoute ({children, ...rest}) {
    console.log("private route works")

    const authenticated = false
    
    return(
        <Route {...rest}>{ !authenticated ? <Redirect to="/login"></Redirect> : children}</Route>
    )
}

export default PrivateRoute;