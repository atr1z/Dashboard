import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';

import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import { useAppContext } from 'contexts/AppContext';
import { getPathById } from 'routes';


export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const { user } = useAppContext();
  return (

    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            user ? <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} /> : <Navigate to={getPathById('sign-in')} replace />
          }
        />
        <Route path="/" element=<Navigate to={user ? getPathById('dashboard') : getPathById('sign-in')} replace /> />
      </Routes>
    </ChakraProvider>
  );
}
