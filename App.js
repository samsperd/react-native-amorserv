import React from 'react'
import { AuthContextProvider } from './src/context/AuthContext';
import Routes from './src/screens/Routes';



export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}