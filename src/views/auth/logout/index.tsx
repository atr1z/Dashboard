import { Box, CircularProgress } from '@chakra-ui/react';

function Logout() {

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