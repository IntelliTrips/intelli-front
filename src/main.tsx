import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Resultado } from './pages/Resultado.tsx';
import { MinhasViagens } from './pages/MinhasViagens.tsx';
import { Login } from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resultado',
    element: <Resultado />,
  },
  {
    path: '/minhas-viagens',
    element: <MinhasViagens />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
