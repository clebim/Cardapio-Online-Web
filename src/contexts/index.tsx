import React from 'react';
import { AuthProvider } from './Auth/AuthContext';
import { RegisterProvider } from './Register/RegisterContext';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <RegisterProvider>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </RegisterProvider>
);

export default AppProvider;
