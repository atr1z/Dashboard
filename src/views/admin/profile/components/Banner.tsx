// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function Banner(props: {
	banner: string;
	picture: string;
	name: string;
	email: string;
	users: number | string;
	assets: number | string;
	reports: number | string;
	[x: string]: any;
}) {
	const { banner, picture, name, email, users, assets, reports, ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const borderColor = useColorModeValue('white !important', '#111C44 !important');
	return (
		<Card mb={{ base: '0px', lg: '20px' }} alignItems='center' {...rest}>
			<Box bg={`url(${banner})`} bgSize='cover' borderRadius='16px' h='131px' w='100%' />
			<Avatar mx='auto' src={picture} h='87px' w='87px' mt='-43px' border='4px solid' borderColor={borderColor} />
			<Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
				{name}
			</Text>
			<Text color={textColorSecondary} fontSize='sm'>
				{email}
			</Text>
			<Flex w='max-content' mx='auto' mt='26px'>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{users}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Usuarios
					</Text>
				</Flex>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{assets}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Activos
					</Text>
				</Flex>
				<Flex mx='auto' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{reports}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Reportes
					</Text>
				</Flex>
			</Flex>
		</Card>
	);
}
