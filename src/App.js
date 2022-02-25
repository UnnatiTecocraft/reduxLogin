import React from "react";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { Route, Routes } from "react-router-dom";
import Registration from "./component/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Registration />} />
            </Routes>
        </>
    );
};

export default App;
