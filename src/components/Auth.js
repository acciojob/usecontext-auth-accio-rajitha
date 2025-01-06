// src/Auth.js
// src/Auth.js
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated); // Check initial state
  }, [isAuthenticated]);

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}
      </p>
      <label>
        <input type="checkbox" onChange={toggleAuth} checked={isAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;

/*
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}
      </p>
      <label>
        <input type="checkbox" onChange={toggleAuth} checked={isAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
/*
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <p className="authText">
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}
      </p>
      <label>
        <input type="checkbox" onChange={toggleAuth} checked={isAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
/*
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <p>{isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}</p>
      <label>
        <input type="checkbox" onChange={toggleAuth} checked={isAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
*/