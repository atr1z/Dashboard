import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';

import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';


export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            isAuthenticated ? <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} /> : <Navigate to="/auth/sign-in" replace />
          }
        />
        <Route path="/" element=<Navigate to={isAuthenticated ? "/dashboard" : "/auth/sign-in"} replace /> />
      </Routes>
    </ChakraProvider>
  );
}
