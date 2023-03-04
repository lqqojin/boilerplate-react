import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Login, Main, NotFound } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: '/main', element: <Main /> },
    ],
  },
]);
