// LoginButton.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const LoginButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
};

export default LoginButton;
