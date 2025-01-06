// src/App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import Auth from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Click on the checkbox to get authenticated</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;