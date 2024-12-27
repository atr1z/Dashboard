import { useAppContext } from "contexts/AppContext";
import Call from "services/Api";

const useLastUserReports = () => {
    const { user } = useAppContext();

    const lastUserReports = async () => {
        try {
            const response = await Call(false, user.token).post('admin/reports/get-guards');
            return response.data;
        } catch (err: any) {
            console.error(err);
            return [];
        }
    };

    return { lastUserReports };
};

export default useLastUserReports;