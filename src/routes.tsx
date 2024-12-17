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

const routes = [
  {
    name: 'Panel de control',
    layout: '/admin',
    path: '/main',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Dashboard />,
  },
  {
    name: 'Mi perfil',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Inicia sesión',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignIn />,
  },
  {
    name: 'Recuperar contraseña',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <PasswordRecovery />,
  }
];

export default routes;
