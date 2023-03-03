import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-between">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i>*/}</p>
    </div>
  );
}