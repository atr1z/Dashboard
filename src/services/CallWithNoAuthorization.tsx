import axios from "axios";

export default function CallWithNoAuthorization() {
    return axios.create({
        baseURL: 'http://yoloistak.mx/v1/',
        timeout: 60000,
        headers: {
            "Content-Type": "application/json",
            "AppBundleName": window.location.hostname,
        }
    });
}