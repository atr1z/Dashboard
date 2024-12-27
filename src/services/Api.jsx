import axios from 'axios';

export default function Call(loginAttempt = false, token = null) {
    return axios.create({
        baseURL: 'http://yoloistak.mx/v1/',
        timeout: 60000,
        headers: {
            "Content-Type": "application/json",
            "AppBundleName": window.location.hostname,
            "LoginAttempt": loginAttempt ? "yesBitch" : "what're you looking at? Bitch",
            "Authorization": "Bearer " + (token ? token : "nanais")
        }
    });
};