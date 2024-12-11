import axios from 'axios';

const Call = (loginAttempt = false) => {
    return axios.create({
        baseURL: 'http://yoloistak.mx/v1/',
        timeout: 60000,
        headers: {
            "Content-Type": "application/json",
            "AppBundleName": window.location.hostname,
            "LoginAttempt": loginAttempt ? "yesBitch" : "whatAreYouLookingAtBitch?",
        }
    });
};

export default Call;