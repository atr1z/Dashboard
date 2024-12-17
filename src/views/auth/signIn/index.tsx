import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getStatus, Status } from "types/Status";
import topLeftError from "hooks/Toasts";
import useLogin from "services/auth/Login";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/followsite2.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";



function SignIn() {
  // Request
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useLogin();
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const handleClick = () => setShow(!show);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setInput({ ...input, [name]: checked });
  };

  const handleLogin = () => {
    setLoading(true);
    login(input.email, input.password).then((response) => {
      setLoading(false);
      switch (response) {
        case Status.Success:
          navigate("/admin/");
          break;
        case Status.UserNotFound:
          topLeftError("Usuario no encontrado");
          break;
        case Status.WrongPassword:
          topLeftError("Contraseña incorrecta");
          break;
        case Status.ErasedUser:
          topLeftError("Usuario eliminado");
          break;
        case Status.BlockedUser:
          topLeftError("Usuario bloqueado");
          break;
        default:
          topLeftError("Error inesperado");
          break;
      }
    });
  };
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            ¡Bienvenido!
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Ingresa tus credenciales para ingresar a tu cuenta.
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Correo electrónico<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              id="email"
              name="email"
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='correo@ejemplo.com'
              mb='24px'
              fontWeight='500'
              size='lg'
              onChange={handleInput}
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Contraseña<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                id="password"
                name="password"
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
                onChange={handleInput}
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  id='remember'
                  name="remember"
                  colorScheme='brandScheme'
                  me='10px'
                  onChange={handleCheckbox}
                />
                <FormLabel
                  htmlFor='remember'
                  mb='0'
                  fontWeight='normal'
                  color={textColor}
                  fontSize='sm'>
                  Rercordarme
                </FormLabel>
              </FormControl>
              <NavLink to='/auth/forgot-password'>
                <Text
                  color={textColorBrand}
                  fontSize='sm'
                  w='124px'
                  fontWeight='500'>
                  ¿Se te olvidó?
                </Text>
              </NavLink>
            </Flex>
            <Button
              isLoading={loading}
              loadingText='Ingresando...'
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              onClick={handleLogin}>
              Ingresar
            </Button>
          </FormControl>
        </Flex>
        <ToastContainer />
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
