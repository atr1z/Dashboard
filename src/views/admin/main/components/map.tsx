import { Box, Flex } from "@chakra-ui/react";
import { AdvancedMarker, APIProvider, Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";

export default function Tracking() {
    const position = { lat: 53.54992, lng: 10.00678 };
    return (
        <APIProvider apiKey={'AIzaSyATKXAQn2qRZbm8uBcfLJLZwFEIsWK5aq4'} onLoad={() => console.log('Maps API has loaded.')}>
            <Flex
                direction='column'
                w='100%'
                overflowX={{ sm: "scroll", lg: "hidden" }}
            >
                <Box>
                    <Map
                        colorScheme="FOLLOW_SYSTEM"
                        defaultCenter={position} defaultZoom={10} style={{ width: '100%', height: '85vh' }}>
                    </Map>
                </Box>
            </Flex>
        </APIProvider>
    );
}