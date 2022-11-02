import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useAuth() as any;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef() as any;
    const errRef = useRef() as any;

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if(userRef?.current)
            userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try {
            // const response = await axios.post(LOGIN_URL,
            //     JSON.stringify({ user, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            if(user==="home"){
                console.log("🚀 ~ file: Login.tsx ~ line 47 ~ handleSubmit ~ user home", user);
                setAuth({ user, pwd, roles:[2001] });
            }
            else if(user==="lounge"){
                console.log("🚀 ~ file: Login.tsx ~ line 51 ~ handleSubmit ~ user lounge", user)
                setAuth({ user, pwd, roles: [1984,5150]});
            }
            else if(user==="editor"){
                console.log("🚀 ~ file: Login.tsx ~ line 54 ~ handleSubmit ~ user editor", user);
                setAuth({ user, pwd, roles: [1984]});
            }
            else if(user==="admin"){
                console.log("🚀 ~ file: Login.tsx ~ line 58 ~ handleSubmit ~ user admin", user);
                setAuth({ user, pwd, roles: [5150]});
            }
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err:any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    )
}

export default Login
