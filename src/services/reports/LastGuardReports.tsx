import { useAppContext } from "contexts/AppContext";
import Call from "services/Api";
import RefreshToken from "services/auth/RefreshToken";
import { Status } from "types/Status";

const useLastUserReports = () => {
    const { user, setUser } = useAppContext();

    const lastUserReports = async (attempts: number = 0) => {
        try {
            const response = await Call(false, user.token).post('admin/reports/get-guards');
            return response.data;
        } catch (err: any) {
            if (err.response.status === Status.InvalidToken && attempts < 3) {
                await RefreshToken(user.token).then((token) => {
                    if (token) {
                        user.token = token;
                        setUser(user);
                        lastUserReports(attempts + 1);
                    }
                });
            }
            console.error(err);
            return [];
        }
    };

    return { lastUserReports };
};

export default useLastUserReports;