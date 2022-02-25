import {
    REGISTER_USER_ERROR,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    LOAD_USERS_ERROR,
    LOAD_USERS_START,
    LOAD_USERS_SUCCESS,
    SET_USER,
    GOOGLE_SIGNIN_START,
    GOOGLE_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_ERROR,
    FACEBOOK_SIGNIN_START,
    FACEBOOK_SIGNIN_SUCCESS,
    FACEBOOK_SIGNIN_ERROR,
} from "./actionsType";

export const loadUsersStart = () => ({
    type: LOAD_USERS_START,
});
export const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    payload: users,
});
export const loadUsersError = (error) => ({
    type: LOAD_USERS_ERROR,
    payload: error,
});

export const registerUserStart = (user) => ({
    type: REGISTER_USER_START,
    payload: user,
});
export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS,
});
export const registerUserError = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: error,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const googleSigninStart = () => ({
    type: GOOGLE_SIGNIN_START,
});
export const googleSigninSuccess = (user) => ({
    type: GOOGLE_SIGNIN_SUCCESS,
    payload: user,
});
export const googleSigninError = (error) => ({
    type: GOOGLE_SIGNIN_ERROR,
    payload: error,
});

export const facebookSigninStart = () => ({
    type: FACEBOOK_SIGNIN_START,
});
export const facebookSigninSuccess = (user) => ({
    type: FACEBOOK_SIGNIN_SUCCESS,
    payload: user,
});
export const facebookSigninError = (error) => ({
    type: FACEBOOK_SIGNIN_ERROR,
    payload: error,
});
