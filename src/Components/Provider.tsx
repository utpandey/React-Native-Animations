import React from 'react';
import {AuthProvider} from './AuthProvider';
import {Routes} from '../Routes';

interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
