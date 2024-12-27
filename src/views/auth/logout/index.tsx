import { Box, CircularProgress } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPathById } from 'routes';
import { useLogout } from 'services/auth/Logout';

function Logout() {
    const { logout } = useLogout();
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            logout();
            navigate(getPathById("sign-in"));
        }, 2000);
        return () => clearTimeout(timer);
    }, [logout, navigate]);
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <CircularProgress isIndeterminate color="brand.500" />
        </Box>
    );
};

export default Logout;