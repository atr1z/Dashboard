// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				Información General
			</Text>
			<Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
				{/* Aquí va la descripción del cliente*/}
			</Text>
			<SimpleGrid columns={2} gap='20px'>
				<Information boxShadow={cardShadow} title='Razón Social' value='XXXXX' />
				<Information boxShadow={cardShadow} title='Dirección' value='XXXXXXX' />
				<Information boxShadow={cardShadow} title='Dato 1' value='xxxxx' />
				<Information boxShadow={cardShadow} title='Dato 2' value='XXXX' />
				<Information boxShadow={cardShadow} title='Dato 3' value='XXXXXXX' />
				<Information boxShadow={cardShadow} title='Dato 4' value='XXXXXXX' />
			</SimpleGrid>
		</Card>
	);
}
