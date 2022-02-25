import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import {
    registerUserError,
    registerUserSuccess,
    loadUsersError,
    loadUsersSuccess,
    googleSigninSuccess,
    googleSigninError,
    facebookSigninSuccess,
    facebookSigninError,
} from "./actions";
import {
    REGISTER_USER_START,
    LOAD_USERS_START,
    GOOGLE_SIGNIN_START,
    FACEBOOK_SIGNIN_START,
} from "./actionsType";
import { registerUserApi, loadUsersApi } from "./api";
import {
    facebookAuthProvider,
    googleAuthProvider,
    reduxSagaFirebase,
} from "../firebase";

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield put(loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}

function* onregisterUserStartAsync({ payload }) {
    try {
        const response = yield call(registerUserApi, payload);
        if (response.status === 201) {
            yield put(registerUserSuccess(response.data));
        }
    } catch (error) {
        yield put(registerUserError(error.response.data));
    }
}

function* onGoogleSigninStartAsync() {
    const data = yield call(
        reduxSagaFirebase.auth.signInWithPopup,
        googleAuthProvider
    );
    try {
        yield put(googleSigninSuccess(data));
    } catch (error) {
        yield put(googleSigninError(error.message));
    }
}

function* onFacebookSigninStartAsync() {
    const data = yield call(
        reduxSagaFirebase.auth.signInWithPopup,
        facebookAuthProvider
    );
    try {
        yield put(facebookSigninSuccess(data));
    } catch (error) {
        yield put(facebookSigninError(error.message));
    }
}

function* onLoadUsers() {
    yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onregisterUser() {
    yield takeEvery(REGISTER_USER_START, onregisterUserStartAsync);
}

function* onGoogleSignin() {
    yield takeLatest(GOOGLE_SIGNIN_START, onGoogleSigninStartAsync);
}

function* onFacebookSignin() {
    yield takeLatest(FACEBOOK_SIGNIN_START, onFacebookSigninStartAsync);
}

const userSagas = [
    fork(onLoadUsers),
    fork(onregisterUser),
    fork(onGoogleSignin),
    fork(onFacebookSignin),
];

export default function* rootSaga() {
    yield all([...userSagas]);
}
