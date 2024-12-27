import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import Map from "./components/map";
import LastReports from "./components/last-reports";

export default function MainDashboard() {

    return (
        <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
            <Grid
                mb='20px'
                gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
                gap={{ base: '20px', xl: '20px' }}
                display={{ base: 'block', xl: 'grid' }}>
                <Flex
                    flexDirection='column'
                    gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
                    <Card px='0px' mb='20px'>
                        <LastReports />
                    </Card>
                </Flex>
                <Flex flexDirection='column' gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}>
                    <Card p='0px' mb='20px'>
                        <Map />
                    </Card>
                </Flex>
            </Grid>
        </Box>
    );
}