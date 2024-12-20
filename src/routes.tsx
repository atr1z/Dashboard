import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdLock,
} from 'react-icons/md';

// Admin Imports
import Dashboard from 'views/admin/main';
import Profile from 'views/admin/profile';

// Auth Imports
import SignIn from 'views/auth/signIn';
import PasswordRecovery from 'views/auth/recovery';
import Logout from 'views/auth/logout';

const routes = [
  {
    identifier: 'dashboard',
    name: 'Panel de control',
    layout: '/admin',
    path: '/main',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Dashboard />,
  },
  {
    identifier: 'profile',
    name: 'Mi perfil',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    identifier: 'sign-in',
    name: 'Inicia sesión',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignIn />,
  },
  {
    identifier: 'password-recovery',
    name: 'Recuperar contraseña',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <PasswordRecovery />,
  },
  {
    identifier: 'logout',
    name: 'Cerrar sesión',
    layout: '/auth',
    path: '/logout',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <Logout />,
  }
];

export default routes;

export const getPathById = (id: string) => {
  const route = routes.find((route) => route.identifier === id);
  return route?.layout+route?.path;
};
