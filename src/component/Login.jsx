import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    facebookSigninStart,
    googleSigninStart,
    loadUsersStart,
    setUser,
} from "../redux/actions";

const initialState = {
    username: "",
    password: "",
};

const Login = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { username, password } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.users);
    const { currentUser } = useSelector((state) => state.users);
    let flag = false;

    useEffect(() => {
        dispatch(loadUsersStart());
    }, []);

    useEffect(() => {
        if (currentUser) {
            navigate("/profile");
            dispatch(setUser(currentUser));
        }
    }, [currentUser]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            return;
        }
        users.forEach((element, index) => {
            if (
                element.username === username &&
                element.password === password
            ) {
                flag = true;
                dispatch(setUser(users[index]));
            }
        });
        if (!flag) {
            toast.error("Wrong username or password");
            dispatch(setUser(null));
        }
    };

    const handleGoogleSignIn = () => {
        dispatch(googleSigninStart());
    };
    const handleFacebookSignIn = () => {
        dispatch(facebookSigninStart());
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-2 col-lg-4"></div>
                <div className="col-8 col-lg-4 mt-5">
                    <h3 className="login-heading">Sign In</h3>
                    <div className="input-box">
                        <h6>Username</h6>
                        <input
                            type="text"
                            className="login-input"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                        />
                        <h6 style={{ marginTop: "20px" }}>Password</h6>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            value={password}
                            onChange={onInputChange}
                        />
                        <button className="login-btn" onClick={handleSubmit}>
                            Sign in
                        </button>
                        <h3
                            style={{
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: "18px",
                                marginTop: "10px",
                            }}>
                            OR
                        </h3>
                        <button className="gbtn" onClick={handleGoogleSignIn}>
                            <img
                                src="https://img.icons8.com/color/48/000000/google-logo.png"
                                style={{
                                    marginRight: "10px",
                                    height: "25px",
                                }}
                            />
                            Sign in with Google
                        </button>
                        <button className="fbtn" onClick={handleFacebookSignIn}>
                            <i
                                className="fa-brands fa-facebook-square"
                                style={{ marginRight: "10px" }}></i>
                            Sign in with Facebook
                        </button>
                    </div>
                    <p
                        className="new-acc"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/signup")}>
                        Create new account{" "}
                        <i className="fas fa-angle-right"></i>
                    </p>
                </div>
                <div className="col-2 col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;
