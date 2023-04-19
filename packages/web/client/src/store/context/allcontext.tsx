import React from 'react';
import { AuthProvider } from './auth/AuthContext';

export default ({ children }: { children: any }) => (
  <AuthProvider state={null} newActions={null}>
    {children}
  </AuthProvider>
);
