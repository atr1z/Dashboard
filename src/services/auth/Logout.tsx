import { useAppContext } from "contexts/AppContext";
import Call from "services/Api";

export const useLogout = () => {
    const { setUser } = useAppContext();
    const logout = async () => {
        try {
            await Call().post("",{});
        } catch (err: any) {
            console.log("Logout error: ",err);
        }
        localStorage.removeItem('user');
        setUser(null);
    };

    return { logout };
};