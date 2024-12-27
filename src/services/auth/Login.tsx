import { v4 as uuidv4 } from 'uuid';
import getBrowserInfo from 'hooks/Browser';
import { getStatus, Status } from 'types/Status';
import Call from 'services/Api';
import { useAppContext } from 'contexts/AppContext';

const useLogin = () => {

    const browser = getBrowserInfo();
    const { setUser } = useAppContext();

    const login = async (username: string, password: string, remember: boolean) => {
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
            const user = {
                name: response.data.name,
                lastName: response.data.lastName,
                email: username,
                modules: response.data.modules.map((module: any) => ({
                    id: module.id,
                    code: module.code,
                    name: module.name,
                    description: module.description,
                    icon: module.icon,
                    parent: module.parent,
                    path: module.path,
                    version: module.version,
                    status: module.status === "Active",
                })),
                token: response.data.token,
            };
            if (remember) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            setUser(user);
            return Status.Success;
        } catch (err: any) {
            setUser(null);
            return getStatus(err.response?.status);
        }
    };

    return { login };
};

export default useLogin;