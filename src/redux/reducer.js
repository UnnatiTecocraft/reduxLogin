import {
    REGISTER_USER_ERROR,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    LOAD_USERS_ERROR,
    LOAD_USERS_START,
    LOAD_USERS_SUCCESS,
    SET_USER,
    GOOGLE_SIGNIN_START,
    GOOGLE_SIGNIN_ERROR,
    GOOGLE_SIGNIN_SUCCESS,
    FACEBOOK_SIGNIN_START,
    FACEBOOK_SIGNIN_SUCCESS,
    FACEBOOK_SIGNIN_ERROR,
} from "./actionsType";

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_START:
        case REGISTER_USER_START:
        case GOOGLE_SIGNIN_START:
        case FACEBOOK_SIGNIN_START:
            return {
                ...state,
                loading: true,
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SET_USER:
        case GOOGLE_SIGNIN_SUCCESS:
        case FACEBOOK_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case LOAD_USERS_ERROR:
        case REGISTER_USER_ERROR:
        case GOOGLE_SIGNIN_ERROR:
        case FACEBOOK_SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
