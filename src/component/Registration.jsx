import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserStart } from "../redux/actions";

const initialState = {
    fullname: "",
    username: "",
    password: "",
    con_pwd: "",
};

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState(initialState);
    const [showEle, setShowEle] = useState(false);
    const { fullname, username, password, con_pwd } = formValue;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        setShowEle(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullname || !username || !password || !con_pwd) {
            return;
        }
        if (password === con_pwd) {
            dispatch(registerUserStart(formValue));
            toast.success("User Added Successfully");
            setFormValue(initialState);
        } else {
            setShowEle(true);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-2 col-lg-4"></div>
                <div className="col-8 col-lg-4 mt-5">
                    <h3 className="login-heading">Sign Up</h3>
                    <div className="input-box">
                        <h6>Full Name</h6>
                        <input
                            type="text"
                            className="login-input"
                            name="fullname"
                            value={fullname}
                            onChange={onInputChange}
                        />
                        <h6 style={{ marginTop: "20px" }}>User Name</h6>
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
                        <h6 style={{ marginTop: "20px" }}>Confirm Password</h6>
                        <input
                            type="password"
                            name="con_pwd"
                            className="login-input"
                            value={con_pwd}
                            onChange={onInputChange}
                        />
                        {showEle ? (
                            <p style={{ color: "red" }}>
                                Does not match with Password
                            </p>
                        ) : null}
                        <button className="login-btn" onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </div>
                    <p
                        className="new-acc"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}>
                        <i className="fas fa-angle-left"></i> Back to Sign in
                        page
                    </p>
                </div>
                <div className="col-2 col-lg-4"></div>
            </div>
        </div>
    );
};

export default Registration;
