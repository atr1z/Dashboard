// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components

import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Flex>
				<Text fontWeight='bold' fontSize='4xl' color={logoColor} mb='20px'>Follow</Text>
				<Text fontWeight='hairline' fontSize='4xl' color={logoColor} mb='20px'>Site</Text>
			</Flex>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
