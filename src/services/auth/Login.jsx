import { v4 as uuidv4 } from 'uuid';
import getBrowserInfo from 'hooks/Browser';
import { getStatus, Status } from 'types/Status';
import Call from 'services/Api';

const useLogin = () => {

    const browser = getBrowserInfo();

    const login = async (username, password) => {

        try {
            const response = await Call(true).post(
                'auth/login',
                {
                    "email": username,
                    "password": password,
                    "deviceUid": uuidv4(),
                    "deviceModel": browser.name + " " + browser.majorVersion,
                    "deviceBrand": "N/A",
                    "deviceSO": browser.osName,
                    "deviceSOVersion": browser.osVersion,
                    "bundleId": window.location.hostname,
                    "bundleVersion": "1.0.0",
                    "token": "N/A",
                });
            const user = response.data;
            return Status.Success;
        } catch (err) {
            return getStatus(err.response?.status);
        }
    };

    return { login };
};

export default useLogin;