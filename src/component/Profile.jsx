import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h3 className="mt-5">Welcome To Your Profile Page</h3>
                <button
                    className="btn btn-danger mt-5"
                    onClick={() => {
                        navigate("/");
                        dispatch(setUser(null));
                    }}>
                    Sign out
                </button>
            </div>
        </>
    );
};

export default Profile;
