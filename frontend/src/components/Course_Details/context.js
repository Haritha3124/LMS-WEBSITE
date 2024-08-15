import React, { createContext, useEffect, useState } from 'react'; 
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast, Flip } from "react-toastify";

const AuthContext = createContext({
    user: [], 
    setCourse: () => {}, 
    loginUser: () => {},
    authTokens:null,
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loguser, setLogUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        console.log("form submitted");
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method:'POST',
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
            toast.success("Logged In !", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            navigate('/');
        } else {
            alert("User Not Found!")
            toast.error("User Not Found !", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
        } 
    };

    let logoutUser = ()=>{
        setAuthTokens(null);
        setLogUser(null);
        localStorage.removeItem('authTokens');
        navigate('/user-login');
    }

    let updateToken = async ()=> {
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'refresh':authTokens?.refresh
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
        if(loading){
            setLoading(false)
        }
    }

    const contextData = {
        user: course,
        setCourse,
        loguser: loguser,
        authTokens:authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    useEffect(()=> {
        if(loading){
            updateToken()
        }
        let fourMinutes = 1000*60*4

        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};