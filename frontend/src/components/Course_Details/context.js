import React, { createContext, useEffect, useState } from 'react'; 
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    user: [], 
    setCourse: () => {}, 
    loginUser: () => {},
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
    // localStorage.getItem('authtokens') 
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loguser, setLogUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        console.log("form submitted");
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value, 
                'password': e.target.password.value
            })
        });
        let data = await response.json();
        console.log('data:', data);

        if(response.status === 200){
            setAuthTokens(data);
            setLogUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            alert("Something went wrong");
        }
    };

    let logoutUser = ()=>{
        setAuthTokens(null);
        setLogUser(null);
        localStorage.removeItem('authTokens');
        navigate('/user-login');
    }

    console.log("update token called")
    let updateToken = async ()=> {
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'refresh':authTokens.refresh
            })
        });
        let data = await response.json();

        if(response.status === 200){
            setAuthTokens(data);
            setLogUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
        }else{
            logoutUser()
        }
    }

    const contextData = {
        user: course,
        setCourse,
        loguser: loguser,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    useEffect(()=> {
        let fourMinutes = 1000*60*4

        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, 2000)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
