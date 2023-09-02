import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Resultado } from './pages/Resultado.tsx';
import { MinhasViagens } from './pages/MinhasViagens.tsx';
import { Login } from './pages/Login.tsx';
import { Register } from './pages/Register.tsx';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import { AuthProvider } from './context/auth.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/resultado'
            element={
              <ProtectedRoute>
                <Resultado />
              </ProtectedRoute>
            }
          />
          <Route
            path='/minhas-viagens'
            element={
              <ProtectedRoute>
                <MinhasViagens />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
