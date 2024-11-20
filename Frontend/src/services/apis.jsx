// import { apiConnector } from "./apiconnector";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authEndPoints = {

    SIGNUP_API: BASE_URL + '/api/v1/user/signup',
    LOGIN_API: BASE_URL + '/api/v1/user/login',
    LOGOUT_API : BASE_URL + '/api/v1/user/logout',
}